import { $, component$, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { Item, Pin, Region } from '~/constants/data';
import { items, regions } from '~/constants/data';
import { getAllPins, insertPin } from '~/db';
import { debounce } from '~/utils/utils';

const ashCanyon = regions[0];

const clearMap = (mapImageElement: HTMLImageElement) => {
  const childNodes = Array.from(mapImageElement.childNodes) as HTMLElement[];
  childNodes.forEach((node) => {
    if (!node.hasAttribute('data-map-image')) {
      mapImageElement.removeChild(node);
    }
  });
};

const allowDrop = (event: any) => event.preventDefault();

const generateImageElement = (pin: Pin) => {
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
  return img;
};

export default component$(() => {
  const allPins = useGetAllPins();

  const pinStore = useStore<{ pins: Pin[] }>({ pins: allPins.value });

  const currentDragItem = useSignal<Item>();
  const currentRegion = useSignal<Region>(ashCanyon);
  const currentRegionMapQuality = useSignal<'low' | 'high'>('low');
  const regionMapRef = useSignal<HTMLImageElement>();

  const drop = $((event: DragEvent) => {
    if (regionMapRef.value && currentDragItem.value) {
      event.preventDefault();

      pinStore.pins = [
        ...pinStore.pins,
        {
          itemId: currentDragItem.value.id,
          itemCount: currentDragItem.value.count,
          itemName: currentDragItem.value.name,
          itemImagePath: currentDragItem.value.imagePath,

          itemXCoordinate: event.offsetX - 5,
          itemYCoordinate: event.offsetY - 5,

          regionId: currentRegion.value.id,
          regionName: currentRegion.value.name,
          regionMapWidth: regionMapRef.value.clientWidth,
          regionMapHeight: regionMapRef.value.clientHeight,
        },
      ];
    }
  });

  const onDragStart = $((event: any, item: Item) => {
    currentDragItem.value = item;
  });

  const upgradeMapImage = $(() => {
    setTimeout(() => {
      if (currentRegionMapQuality.value === 'low') {
        currentRegionMapQuality.value = 'high';

        const newImageSrc = `${currentRegion.value?.imagePath.replace('low', 'high')}`;
        if (regionMapRef.value) {
          regionMapRef.value.src = newImageSrc;
        }
      }
    }, 1000);
  });

  const savePins = $(async () => await insertPin(pinStore.pins));

  useVisibleTask$(() => {
    const ro = new ResizeObserver(
      debounce((entries: any) => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          pinStore.pins = pinStore.pins.map((pin) => {
            console.log('coordinate', pin.itemXCoordinate, pin.itemYCoordinate);

            const newXCoordinate = (cr.width / pin.regionMapWidth) * pin.itemXCoordinate;
            const newYCoordinate = (cr.height / pin.regionMapHeight) * pin.itemYCoordinate;

            console.log('new coordinate', newXCoordinate, newYCoordinate);

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

  useVisibleTask$(({ track }) => {
    track(() => pinStore.pins.length);

    console.log('pinStore.pins', pinStore.pins);

    const mapImageElement = document.getElementById('map-image') as HTMLImageElement;

    if (mapImageElement) {
      // remove all child nodes that don't have the data-map-image attribute
      clearMap(mapImageElement);

      pinStore.pins.forEach((pin) => {
        mapImageElement.appendChild(generateImageElement(pin));
      });
    }
  });

  return (
    <>
      <div class="flex justify-between px-6 py-4">
        <div>
          {/* Map Selection */}
          <select class="select w-full bg-gray-800">
            <option disabled selected>
              Pick Map
            </option>{' '}
            {regions.map((region) => (
              <option key={region.id} onClick$={() => (currentRegion.value = region)}>
                {region.name}
              </option>
            ))}
          </select>
          {/* Map Area */}
          <div class="cursor-pointer relative" id="map-image">
            <img
              onDrop$={(event: any) => drop(event)}
              onDragOver$={(event) => allowDrop(event)}
              src={currentRegion.value?.imagePath}
              width="650px"
              height="750px"
              alt="map-image"
              onLoad$={upgradeMapImage}
              ref={regionMapRef}
              data-map-image="true"
            />
          </div>

          <br />

          <p>
            pin count: <span>{pinStore.pins?.length}</span>
          </p>

          <p>
            currentMapImage quality:{' '}
            <span class={currentRegionMapQuality.value === 'high' ? 'text-green-500' : 'text-red-500'}>
              {currentRegionMapQuality.value}
            </span>
          </p>
        </div>
        {/* Item Area */}

        <div class="flex flex-col mt-1">
          <button class="btn btn-primary" type="button" onClick$={() => savePins()}>
            Save Pins
          </button>
          <div class="grid grid-cols-3 gap-4 max-w-[300px] max-h-[650px] overflow-y-scroll overflow-x-hidden px-2 mt-8">
            {items.map((item) => (
              <div class="tooltip" data-tip={item.name} key={item.id}>
                <button class="btn">
                  <img
                    draggable={true}
                    src={item.imagePath}
                    alt="item-image"
                    width="50px"
                    height="50px"
                    onDragStart$={(event: any) => onDragStart(event, item)}
                  />
                </button>
              </div>
            ))}
          </div>
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

export const useGetAllPins = routeLoader$(async () => {
  console.log('useGetAllPins running');
  const result = await getAllPins();
  return result;
});
