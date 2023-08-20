import { $, component$, useSignal, useStore, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { routeLoader$, useLocation, useNavigate, type DocumentHead } from '@builder.io/qwik-city';
import type { Item, NewPin } from '~/constants/data';
import { items, regions } from '~/constants/data';
import { deletePinsByRegionId, getPinsByRegionId, insertPin } from '~/db';
import { debounce } from '~/lib/utils';

const clearMap = (mapImageElement: HTMLImageElement) => {
  const childNodes = Array.from(mapImageElement.childNodes) as HTMLElement[];
  childNodes.forEach((node) => {
    if (!node.hasAttribute('data-map-image')) {
      mapImageElement.removeChild(node);
    }
  });
};

const allowDrop = (event: any) => event.preventDefault();

const generateImageElement = (pin: NewPin, index: number) => {
  const img = document.createElement('img');
  img.style.position = 'absolute';
  img.draggable = true;
  if (pin.itemXCoordinate && pin.itemYCoordinate) {
    img.style.top = `${pin.itemYCoordinate - 10}px`;
    img.style.left = `${pin.itemXCoordinate - 10}px`;
  }
  img.style.width = '20px';
  img.style.height = '20px';
  img.src = pin.itemImagePath;
  img.style.borderRadius = '50%';
  img.style.zIndex = '1000';
  img.style.cursor = 'pointer';
  img.style.border = '1px solid transparent';

  // add special property for finding this element later using pin.id
  img.setAttribute('data-pin-id', index.toString());

  // add event handle for clicking on pin image
  img.addEventListener('click', () => {
    // if pin is clicked, scroll to the item in the list
    // const itemElement = document.querySelector(`[data-tip="${pin.itemName}"]`);

    // if (itemElement) {
    //   itemElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

    //   // wait for the scroll to finish
    //   setTimeout(() => {
    //     // add some zooming effect to the item element after scrolling to it
    //     itemElement.animate(
    //       [
    //         // keyframes
    //         { transform: 'scale(1)' },
    //         { transform: 'scale(1.5)' },
    //         { transform: 'scale(1)' },
    //       ],
    //       {
    //         // timing options
    //         duration: 750,
    //       },
    //     );
    //   }, 1000);
    // }

    // remove old border from all pins
    const allPinElements = document.querySelectorAll('[data-pin-id]');
    allPinElements.forEach((pinElement) => {
      if (pinElement && pinElement instanceof HTMLImageElement) {
        pinElement.style.border = '1px solid transparent';
      }
    });

    const pinElement = document.querySelector(`[data-pin-id="${index}"]`);
    if (pinElement && pinElement instanceof HTMLImageElement) {
      pinElement.style.border = '1px solid red';
    }
  });

  return img;
};

export default component$(() => {
  const navigate = useNavigate();
  const loc = useLocation();

  const allPins = useGetAllPins();

  const pinStore = useStore<{ pins: NewPin[] }>({ pins: [] });

  const itemStore = useStore<{ items: Item[] }>({ items: items });

  const currentDragItem = useSignal<Item>();

  const currentRegionMapQuality = useSignal<'low' | 'high'>('low');
  const regionMapRef = useSignal<HTMLImageElement>();

  const drop = $(async (event: DragEvent) => {
    if (regionMapRef.value && currentDragItem.value) {
      event.preventDefault();

      const region = regions.find((region) => region.id === loc.params.regionId);
      if (region) {
        const newPin = {
          itemId: currentDragItem.value.id,
          itemCount: currentDragItem.value.count,
          itemName: currentDragItem.value.name,
          itemImagePath: currentDragItem.value.imagePath,

          itemXCoordinate: event.offsetX - 5,
          itemYCoordinate: event.offsetY - 5,

          regionId: region.id,
          regionName: region.name,
          regionMapWidth: regionMapRef.value.clientWidth,
          regionMapHeight: regionMapRef.value.clientHeight,
        };

        const result = await insertPin(newPin);

        if (result?.rowsAffected) {
          pinStore.pins = [...pinStore.pins, newPin];
        }
      }
    }
  });

  const onDragStart = $((event: any, item: Item) => {
    currentDragItem.value = item;
  });

  const upgradeMapImage = $(() => {
    setTimeout(() => {
      if (currentRegionMapQuality.value === 'low') {
        currentRegionMapQuality.value = 'high';

        const currentRegion = regions.find((region) => region.id === loc.params.regionId);

        const newImageSrc = `${currentRegion?.imagePath.replace('low', 'high')}`;
        if (regionMapRef.value) {
          regionMapRef.value.src = newImageSrc;
        }
      }
    }, 500);
  });

  useVisibleTask$(() => {
    const ro = new ResizeObserver(
      debounce((entries: any) => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          // refactor this re-assignment logic to be more efficient and cause less re-renders
          pinStore.pins = pinStore.pins.map((pin) => {
            const newXCoordinate = (cr.width / pin.regionMapWidth) * pin.itemXCoordinate;
            const newYCoordinate = (cr.height / pin.regionMapHeight) * pin.itemYCoordinate;
            pin.itemXCoordinate = newXCoordinate;
            pin.itemYCoordinate = newYCoordinate;
            pin.regionMapWidth = cr.width;
            pin.regionMapHeight = cr.height;
            return pin;
          });
        }
      }, 100),
    );
    if (regionMapRef.value) {
      ro.observe(regionMapRef.value);
    }
    return () => ro.disconnect();
  });

  const rerenderPins = $((pins: NewPin[]) => {
    const mapImageElement = document.getElementById('map-image') as HTMLImageElement;

    if (mapImageElement) {
      // remove all child nodes that don't have the data-map-image attribute
      // todo: refactor this to be more efficient, maybe only add new pins instead of clearing the map and re-adding all pins
      clearMap(mapImageElement);

      pins.forEach((pin, index) => {
        mapImageElement.appendChild(generateImageElement(pin, index));
      });
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => pinStore.pins.length);

    rerenderPins(pinStore.pins);
  });

  useVisibleTask$(({ track }) => {
    track(() => itemStore.items.length);

    const pins = pinStore.pins.filter((pin) => itemStore.items.find((item) => item.id === pin.itemId));

    rerenderPins(pins);
  });

  useTask$(({ track }) => {
    track(() => allPins.value);

    if (allPins.value) {
      pinStore.pins = allPins.value;
    }
  });

  const itemSearchInput = $((event: InputEvent) => {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue) {
      const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      if (filteredItems) {
        itemStore.items = filteredItems;
      }
    } else {
      itemStore.items = items;
    }
  });

  return (
    <>
      <div class="flex justify-between px-6 py-4">
        <div class="flex flex-col mt-1">
          <div class="w-full">
            <input
              type="search"
              placeholder="hammer, axe, etc."
              class="input input-bordered input-info w-full max-w-xs"
              onInput$={itemSearchInput}
            />
          </div>

          <div
            data-testid="items"
            class="grid grid-cols-4 gap-6 w-full max-h-[650px] overflow-y-scroll overflow-x-hidden px-2 mt-8"
          >
            {itemStore.items.map((item) => (
              <div class="tooltip" data-tip={item.name} key={item.id}>
                <button class="btn w-20 h-20">
                  <img
                    draggable={true}
                    src={item.imagePath}
                    alt="item-image"
                    width="50"
                    height="50"
                    onDragStart$={(event: any) => onDragStart(event, item)}
                  />
                </button>
              </div>
            ))}
          </div>

          <div class="mt-10 flex justify-center">
            <button
              class="btn btn-error btn-xs"
              type="button"
              onClick$={async () => {
                if (confirm('Are you sure you want to clear the map?')) {
                  await deletePinsByRegionId(loc.params.regionId);

                  navigate();
                }
              }}
            >
              ❗Clear Map❗
            </button>
          </div>
        </div>

        <div>
          <select
            class="select w-full"
            onChange$={(event) => {
              const region = regions.find((region) => region.id === event.target.value);
              if (region) {
                currentRegionMapQuality.value = 'low';

                navigate(`/maps/${region.id}`);
              }
            }}
          >
            {regions.map((region) => (
              <option key={region.id} value={region.id} selected={loc.params.regionId === region.id}>
                {region.name}
              </option>
            ))}
          </select>

          <div class="relative w-[650px] h-[750px]" id="map-image">
            <img
              onDrop$={(event: any) => drop(event)}
              onDragOver$={(event) => allowDrop(event)}
              src={regions[Number(loc.params.regionId)].imagePath}
              id={regions[Number(loc.params.regionId)].id}
              width="650"
              height="750"
              alt="map-image"
              onLoad$={upgradeMapImage}
              ref={regionMapRef}
              data-map-image="true"
            />
          </div>

          <br />

          {/* if is vercel env do not show this info */}
          {import.meta.env.VITE_VERCEL_ENV !== 'production' && (
            <div class="border border-gray-500 p-4 divide-y divide-blue-300 text-center">
              <p class="text-lg font-semibold text-blue-600">**** DEBUG ****</p>

              <p class="p-2">
                pin count: <span>{pinStore.pins?.length}</span>
              </p>

              <div class="p-1">
                {pinStore.pins.map((pin) => (
                  <div class="py-1" key={pin.id}>
                    {pin.itemName}
                  </div>
                ))}
              </div>

              <p class="p-2">
                currentMapImage quality:{' '}
                <span class={currentRegionMapQuality.value === 'high' ? 'text-green-500' : 'text-red-500'}>
                  {currentRegionMapQuality.value}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'TLD Item Logger',
  meta: [
    {
      name: 'description',
      content: 'The Long Dark Item Logger',
    },
  ],
};

export const useGetAllPins = routeLoader$(async ({ params }) => {
  const regionId = params.regionId;
  if (regionId) {
    return await getPinsByRegionId(regionId);
    // todo: we need to return 404 if no data is returned or if the regionId is invalid
  }
});
