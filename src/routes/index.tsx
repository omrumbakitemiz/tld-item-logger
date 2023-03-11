import { $, component$, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { server$ } from '@builder.io/qwik-city';
import type { Item, Pin, Region } from '~/constants/data';
import { items, regions } from '~/constants/data';
import { selectItems } from '~/utils/db';
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
  img.draggable = false;
  img.style.top = `${pin.coordinate.y - 10}px`;
  img.style.left = `${pin.coordinate.x - 10}px`;
  img.style.width = '20px';
  img.style.height = '20px';
  img.src = pin.item?.path || '';
  img.style.borderRadius = '50%';
  img.style.zIndex = '1000';
  return img;
};

export default component$(() => {
  const currentDragItem = useSignal<Item | undefined>();

  const currentRegion = useSignal<Region | null>(ashCanyon);

  const currentQuality = useSignal<'low' | 'high'>('low');

  const mapRef = useSignal<HTMLImageElement>();

  const pinStore = useStore<{ pins: Pin[] }>({ pins: [] }, { deep: true });

  const drop = $((event: DragEvent) => {
    if (mapRef.value) {
      event.preventDefault();

      const xCoordinate = event.offsetX - 5;
      const yCoordinate = event.offsetY - 5;

      pinStore.pins.push({
        item: currentDragItem.value,
        coordinate: {
          x: xCoordinate,
          y: yCoordinate,
        },
        mapSize: {
          width: mapRef.value.clientWidth,
          height: mapRef.value.clientHeight,
        },
      });
    }
  });

  const onDragStart = $((event: any, item: Item) => {
    currentDragItem.value = item;
  });

  const upgradeMapImage = $(() => {
    console.log('upgradeMapImage');
    setTimeout(() => {
      if (currentQuality.value === 'low') {
        currentQuality.value = 'high';

        const newImageSrc = `${currentRegion.value?.imageSrc.replace('low', 'high')}`;
        if (mapRef.value) {
          mapRef.value.src = newImageSrc;
        }
      }
    }, 1000);
  });

  useVisibleTask$(() => {
    const ro = new ResizeObserver(
      debounce((entries: any) => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          pinStore.pins = pinStore.pins.map((pin) => {
            if (pin.coordinate) {
              console.log('coordinate', pin.coordinate.x, pin.coordinate.y);

              const newXCoordinate = (cr.width / pin.mapSize.width) * pin.coordinate.x;
              const newYCoordinate = (cr.height / pin.mapSize.height) * pin.coordinate.y;

              console.log('new coordinate', newXCoordinate, newYCoordinate);

              pin.coordinate.x = newXCoordinate;
              pin.coordinate.y = newYCoordinate;
              pin.mapSize.width = cr.width;
              pin.mapSize.height = cr.height;
            }

            return pin;
          });
        }
      }, 100),
    );

    if (mapRef.value) {
      ro.observe(mapRef.value);
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
        const img = generateImageElement(pin);

        mapImageElement.appendChild(img);
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
              <option onClick$={() => (currentRegion.value = region)}>{region.name}</option>
            ))}
          </select>
          {/* Map Area */}
          <div class="cursor-pointer relative" id="map-image">
            <img
              onDrop$={(event: any) => drop(event)}
              onDragOver$={(event) => allowDrop(event)}
              src={currentRegion.value?.imageSrc}
              width="650px"
              height="750px"
              alt="map-image"
              onLoad$={upgradeMapImage}
              ref={mapRef}
              data-map-image="true"
            />
          </div>

          <br />

          <p>
            pin count: <span>{pinStore.pins.length}</span>
          </p>

          <p>
            currentMapImage quality:{' '}
            <span class={currentQuality.value === 'high' ? 'text-green-500' : 'text-red-500'}>
              {currentQuality.value}
            </span>
          </p>

          <div>
            <button class="btn btn-accent" onClick$={server$(async () => await selectItems())}>
              immino
            </button>
          </div>
        </div>
        {/* Item Area */}
        <div class="grid grid-cols-3 gap-4 max-w-[300px] max-h-[650px] overflow-y-scroll overflow-x-hidden pt-11 px-2">
          {items.map((item) => (
            <div class="tooltip" data-tip={item.name}>
              <button class="btn">
                <img
                  draggable={true}
                  src={item.path}
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
