import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { Item, Region } from '~/constants/data';
import { items, regions } from '~/constants/data';

export default component$(() => {
  const currentDragItem = useSignal<Item | null>(null);

  const ashCanyon = regions[0];
  const currentRegion = useSignal<Region | null>(ashCanyon);

  const currentQuality = useSignal<'low' | 'high'>('low');

  const mapRef = useSignal<HTMLImageElement>();

  const allowDrop = $((event: any) => {
    event.preventDefault();
  });

  const drop = $((event: DragEvent) => {
    event.preventDefault();
    console.log('drop item: ', currentDragItem.value);
    console.log('drop region: ', currentRegion.value);
    console.log('drop event: ', event);

    const xCoordinate = event.offsetX - 5;
    const yCoordinate = event.offsetY - 5;

    const img = document.createElement('img');
    img.style.position = 'absolute';
    img.style.top = `${yCoordinate}px`;
    img.style.left = `${xCoordinate}px`;
    img.style.width = '20px';
    img.style.height = '20px';
    img.src = currentDragItem.value?.path || '';
    img.style.borderRadius = '50%';
    img.style.zIndex = '1000';

    document.getElementById('map-image')?.appendChild(img);
  });

  const onDragStart = $((event: any, item: Item) => {
    currentDragItem.value = item;
  });

  const upgradeMapImage = $(() => {
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

  return (
    <>
      <div class="flex justify-between px-6 py-4">
        <div>
          {/* Map Selection */}
          <select class="select w-full max-w-xs bg-gray-800">
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
              width="550px"
              height="640px"
              alt="map-image"
              onLoad$={upgradeMapImage}
              ref={mapRef}
            />
          </div>
        </div>
        {/* Item Area */}
        <div class="grid grid-cols-3 gap-4 max-w-[300px] max-h-[650px] overflow-y-scroll overflow-x-hidden pt-11 px-2">
          {items.map((item) => (
            <div class="tooltip" data-tip={item.name}>
              <button class="btn">
                <img
                  draggable
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
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
