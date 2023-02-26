import type { QwikMouseEvent } from '@builder.io/qwik';
import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

const regions = [
  { id: 1, name: 'Ash Canyon', imageSrc: '/regions/ash-canyon.webp' },
  { id: 2, name: 'Blackrock', imageSrc: '/regions/blackrock.webp' },
  { id: 3, name: 'Bleak Inlet', imageSrc: '/regions/bleak-inlet.webp' },
  { id: 4, name: 'Broken Railroad', imageSrc: '/regions/broken-railroad.webp' },
  { id: 5, name: 'Coastal Highway', imageSrc: '/regions/coastal-highway.webp' },
  { id: 6, name: 'Desolation Point', imageSrc: '/regions/desolation-point.webp' },
  { id: 7, name: 'Far Range Branch Line', imageSrc: '/regions/far-range-branch-line.webp' },
  { id: 8, name: 'Forlorn Muskeg', imageSrc: '/regions/forlorn-muskeg.webp' },
  { id: 9, name: 'Hushed River Valley', imageSrc: '/regions/hushed-river-valley.webp' },
  { id: 10, name: 'Mountain Town', imageSrc: '/regions/mountain-town.webp' },
  { id: 11, name: 'Mystery Lake', imageSrc: '/regions/mystery-lake.webp' },
  { id: 12, name: 'Plesant Valley', imageSrc: '/regions/plesant-walley.webp' },
  { id: 13, name: 'Timberwolf Mountain', imageSrc: '/regions/timberwolf-mountain.webp' },
  { id: 14, name: 'Transfer Pass', imageSrc: '/regions/transfer-pass.webp' },
];

const items = [
  { id: 1, name: 'Arrow_shaft', path: '/items/Arrow_shaft_icon.webp' },
  { id: 2, name: 'Green_Maple_Sapling', path: '/items/Green_Maple_Sapling_icon.webp' },
  { id: 3, name: 'Reclaimed_wood', path: '/items/Reclaimed_wood_icon.webp' },
  { id: 4, name: 'Arrowhead', path: '/items/Arrowhead_icon.webp' },
  { id: 5, name: 'Gut', path: '/items/Gut_icon.webp' },
  { id: 6, name: 'Reishi_mushroom', path: '/items/Reishi_mushroom_icon.webp' },
  { id: 7, name: 'Barbs_Rifle', path: '/items/Barbs_Rifle_icon.webp' },
  { id: 8, name: 'Hacksaw', path: '/items/Hacksaw_icon.webp' },
  { id: 9, name: 'Revolver_Ammunition', path: '/items/Revolver_Ammunition_icon.webp' },
  { id: 10, name: 'Bear_skin_bedroll', path: '/items/Bear_skin_bedroll_icon.webp' },
  { id: 11, name: 'Heavy_hammer', path: '/items/Heavy_hammer_icon.webp' },
  { id: 12, name: 'Revolver_Shell_Casing', path: '/items/Revolver_Shell_Casing_icon.webp' },
  { id: 13, name: 'Bedroll', path: '/items/Bedroll_icon.webp' },
  { id: 14, name: 'Hook', path: '/items/Hook_icon.webp' },
  { id: 15, name: 'Revolver', path: '/items/Revolver_icon.webp' },
  { id: 16, name: 'Birch_bark', path: '/items/Birch_bark_icon.webp' },
  { id: 17, name: 'Hunting_rifle', path: '/items/Hunting_rifle_icon.webp' },
  { id: 18, name: 'Rifle_Shell_Casing', path: '/items/Rifle_Shell_Casing_icon.webp' },
  { id: 19, name: 'Black_bear_hide', path: '/items/Black_bear_hide_icon.webp' },
  { id: 20, name: 'Improvised_Crampons', path: '/items/Improvised_Crampons_icon.webp' },
  { id: 21, name: 'Rifle_ammunition', path: '/items/Rifle_ammunition_icon.webp' },
  { id: 22, name: 'Bullet', path: '/items/Bullet_icon.webp' },
  { id: 23, name: 'Improvised_hatchet', path: '/items/Improvised_hatchet_icon.webp' },
  { id: 24, name: 'Rifle_cleaning_kit', path: '/items/Rifle_cleaning_kit_icon.webp' },
  { id: 25, name: 'Can_of_Gunpowder', path: '/items/Can_of_Gunpowder_icon.webp' },
  { id: 26, name: 'Improvised_knife', path: '/items/Improvised_knife_icon.webp' },
  { id: 27, name: 'Rose_hip', path: '/items/Rose_hip_icon.webp' },
  { id: 28, name: 'Car_Battery', path: '/items/Car_Battery_icon.webp' },
  { id: 29, name: 'Jerry_can', path: '/items/Jerry_can_icon.webp' },
  { id: 30, name: 'Scrap_Lead', path: '/items/Scrap_Lead_icon.webp' },
  { id: 31, name: 'Cloth', path: '/items/Cloth_icon.webp' },
  { id: 32, name: 'Line', path: '/items/Line_icon.webp' },
  { id: 33, name: 'Scrap_metal', path: '/items/Scrap_metal_icon.webp' },
  { id: 34, name: 'Crow_feather', path: '/items/Crow_feather_icon.webp' },
  { id: 35, name: 'Magnifying_lens', path: '/items/Magnifying_lens_icon.webp' },
  { id: 36, name: 'Sewing_kit', path: '/items/Sewing_kit_icon.webp' },
  { id: 37, name: 'Curators_Rifle', path: '/items/Curators_Rifle_icon.webp' },
  { id: 38, name: 'Marine_Flare', path: '/items/Marine_Flare_icon.webp' },
  { id: 39, name: 'Simple_arrow', path: '/items/Simple_arrow_icon.webp' },
  { id: 40, name: 'Cured_Maple_Sapling', path: '/items/Cured_Maple_Sapling_icon.webp' },
  { id: 25, name: 'Moose_hide', path: '/items/Moose_hide_icon.webp' },
  { id: 25, name: 'Spray_Paint', path: '/items/Spray_Paint_icon.webp' },
  { id: 25, name: 'Cured_leather', path: '/items/Cured_leather_icon.webp' },
  { id: 25, name: 'Mountaineering_rope', path: '/items/Mountaineering_rope_icon.webp' },
  { id: 25, name: 'Stick', path: '/items/Stick_icon.webp' },
  { id: 25, name: 'Deer_hide', path: '/items/Deer_hide_icon.webp' },
  { id: 25, name: 'Noisemaker', path: '/items/Noisemaker_icon.webp' },
  { id: 25, name: 'Storm_lantern', path: '/items/Storm_lantern_icon.webp' },
  { id: 25, name: 'Distress_pistol', path: '/items/Distress_pistol_icon.webp' },
  { id: 25, name: 'Old_mans_beard_lichen', path: '/items/Old_mans_beard_lichen_icon.webp' },
  { id: 25, name: 'Stump_Remover', path: '/items/Stump_Remover_icon.webp' },
  { id: 25, name: 'Dusting_Sulfur', path: '/items/Dusting_Sulfur_icon.webp' },
  { id: 25, name: 'Prepared_Birch_Bark', path: '/items/Prepared_Birch_Bark_icon.webp' },
  { id: 25, name: 'Survival_bow', path: '/items/Survival_bow_icon.webp' },
  { id: 25, name: 'Emergency_stim', path: '/items/Emergency_stim_icon.webp' },
  { id: 25, name: 'Prepared_reishi_mushrooms', path: '/items/Prepared_reishi_mushrooms_icon.webp' },
  { id: 25, name: 'Vaughns_Rifle', path: '/items/Vaughns_Rifle_icon.webp' },
  { id: 25, name: 'Firestriker', path: '/items/Firestriker_icon.webp' },
  { id: 25, name: 'Prepared_rose_hips', path: '/items/Prepared_rose_hips_icon.webp' },
  { id: 25, name: 'Whetstone', path: '/items/Whetstone_icon.webp' },
  { id: 25, name: 'Fishing_tackle', path: '/items/Fishing_tackle_icon.webp' },
  { id: 25, name: 'Prybar', path: '/items/Prybar_icon.webp' },
  { id: 25, name: 'Wolf_pelt', path: '/items/Wolf_pelt_icon.webp' },
  { id: 25, name: 'Flare', path: '/items/Flare_icon.webp' },
  { id: 25, name: 'Quality_tools', path: '/items/Quality_tools_icon.webp' },
  { id: 25, name: 'Wood_matches', path: '/items/Wood_matches_icon.webp' },
  { id: 25, name: 'Flare_shell', path: '/items/Flare_shell_icon.webp' },
  { id: 25, name: 'Rabbit_pelt', path: '/items/Rabbit_pelt_icon.webp' },
  { id: 25, name: 'Woodwrights_Bow', path: '/items/Woodwrights_Bow_icon.webp' },
];

export default component$(() => {
  const regionId = useSignal(1);
  const currentRegion = regions.find((region) => region.id === regionId.value);

  const handleMouseUp = $((event: QwikMouseEvent<HTMLImageElement, MouseEvent>) => {
    console.log('here', event);
  });

  return (
    <div class="flex justify-between px-6 py-4">
      <div>
        {/* Map Selection */}
        <div class="dropdown">
          <label tabIndex={0} class="btn">
            Maps
          </label>
          <ul tabIndex={0} class="p-2 shadow dropdown-content menu bg-base-100 w-52">
            {regions.map((region) => (
              <li class="flex" onClick$={() => (regionId.value = region.id)}>
                <img src={region.imageSrc} alt={region.name + ' image'} width="100px" />
                <a>{region.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Area */}
        <div>
          <img
            class="cursor-pointer"
            onClick$={(event) => handleMouseUp(event)}
            draggable={false}
            src={currentRegion?.imageSrc}
            width="550px"
            alt="map-image"
          />
        </div>
      </div>

      {/* Item Area */}
      <div class="grid grid-cols-3 gap-4 max-w-[300px] max-h-[650px] overflow-y-scroll overflow-x-hidden mt-11 px-2">
        {items.map((item) => (
          <div class="tooltip" data-tip={item.name}>
            <button class="btn">
              <img src={item.path} alt="item-image" width="50px" />
            </button>
          </div>
        ))}
      </div>
    </div>
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
