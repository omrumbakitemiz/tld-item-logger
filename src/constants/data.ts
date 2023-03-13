import { z } from '@builder.io/qwik-city';

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  path: z.string(),
});

export const CoordinateSchema = z.object({
  x: z.number(),
  y: z.number(),
});

export const MapSizeSchema = z.object({
  width: z.number(),
  height: z.number(),
});

export const PinSchema = z.object({
  id: z.string().optional(),
  count: z.number(),
  item: ItemSchema,
  coordinate: CoordinateSchema,
  mapSize: MapSizeSchema,
});

export type Pin = z.infer<typeof PinSchema>;
export type Item = z.infer<typeof ItemSchema>;
export type Coordinate = z.infer<typeof CoordinateSchema>;
export type MapSize = z.infer<typeof MapSizeSchema>;

export type Region = (typeof regions)[number];

export const regions = [
  { id: '1', name: 'Ash Canyon', imageSrc: '/regions/ash-canyon-low.webp' },
  { id: '2', name: 'Blackrock', imageSrc: '/regions/blackrock-low.webp' },
  { id: '3', name: 'Bleak Inlet', imageSrc: '/regions/bleak-inlet-low.webp' },
  { id: '4', name: 'Broken Railroad', imageSrc: '/regions/broken-railroad-low.webp' },
  { id: '5', name: 'Coastal Highway', imageSrc: '/regions/coastal-highway-low.webp' },
  { id: '6', name: 'Desolation Point', imageSrc: '/regions/desolation-point-low.webp' },
  { id: '7', name: 'Far Range Branch Line', imageSrc: '/regions/far-range-branch-line-low.webp' },
  { id: '8', name: 'Forlorn Muskeg', imageSrc: '/regions/forlorn-muskeg-low.webp' },
  { id: '9', name: 'Hushed River Valley', imageSrc: '/regions/hushed-river-valley-low.webp' },
  { id: '10', name: 'Mountain Town', imageSrc: '/regions/mountain-town-low.webp' },
  { id: '11', name: 'Mystery Lake', imageSrc: '/regions/mystery-lake-low.webp' },
  { id: '12', name: 'Plesant Valley', imageSrc: '/regions/plesant-walley-low.webp' },
  { id: '13', name: 'Timberwolf Mountain', imageSrc: '/regions/timberwolf-mountain-low.webp' },
  { id: '14', name: 'Transfer Pass', imageSrc: '/regions/transfer-pass-low.webp' },
];

export const items = [
  { id: '1', name: 'Arrow_shaft', path: '/items/Arrow_shaft-low.webp' },
  { id: '2', name: 'Green_Maple_Sapling', path: '/items/Green_Maple_Sapling-low.webp' },
  { id: '3', name: 'Reclaimed_wood', path: '/items/Reclaimed_wood-low.webp' },
  { id: '4', name: 'Arrowhead', path: '/items/Arrowhead-low.webp' },
  { id: '5', name: 'Gut', path: '/items/Gut-low.webp' },
  { id: '6', name: 'Reishi_mushroom', path: '/items/Reishi_mushroom-low.webp' },
  { id: '7', name: 'Barbs_Rifle', path: '/items/Barbs_Rifle-low.webp' },
  { id: '8', name: 'Hacksaw', path: '/items/Hacksaw-low.webp' },
  { id: '9', name: 'Revolver_Ammunition', path: '/items/Revolver_Ammunition-low.webp' },
  { id: '10', name: 'Bear_skin_bedroll', path: '/items/Bear_skin_bedroll-low.webp' },
  { id: '11', name: 'Heavy_hammer', path: '/items/Heavy_hammer-low.webp' },
  { id: '12', name: 'Revolver_Shell_Casing', path: '/items/Revolver_Shell_Casing-low.webp' },
  { id: '13', name: 'Bedroll', path: '/items/Bedroll-low.webp' },
  { id: '14', name: 'Hook', path: '/items/Hook-low.webp' },
  { id: '15', name: 'Revolver', path: '/items/Revolver-low.webp' },
  { id: '16', name: 'Birch_bark', path: '/items/Birch_bark-low.webp' },
  { id: '17', name: 'Hunting_rifle', path: '/items/Hunting_rifle-low.webp' },
  { id: '18', name: 'Rifle_Shell_Casing', path: '/items/Rifle_Shell_Casing-low.webp' },
  { id: '19', name: 'Black_bear_hide', path: '/items/Black_bear_hide-low.webp' },
  { id: '20', name: 'Improvised_Crampons', path: '/items/Improvised_Crampons-low.webp' },
  { id: '21', name: 'Rifle_ammunition', path: '/items/Rifle_ammunition-low.webp' },
  { id: '22', name: 'Bullet', path: '/items/Bullet-low.webp' },
  { id: '23', name: 'Improvised_hatchet', path: '/items/Improvised_hatchet-low.webp' },
  { id: '24', name: 'Rifle_cleaning_kit', path: '/items/Rifle_cleaning_kit-low.webp' },
  { id: '25', name: 'Can_of_Gunpowder', path: '/items/Can_of_Gunpowder-low.webp' },
  { id: '26', name: 'Improvised_knife', path: '/items/Improvised_knife-low.webp' },
  { id: '27', name: 'Rose_hip', path: '/items/Rose_hip-low.webp' },
  { id: '28', name: 'Car_Battery', path: '/items/Car_Battery-low.webp' },
  { id: '29', name: 'Jerry_can', path: '/items/Jerry_can-low.webp' },
  { id: '30', name: 'Scrap_Lead', path: '/items/Scrap_Lead-low.webp' },
  { id: '31', name: 'Cloth', path: '/items/Cloth-low.webp' },
  { id: '32', name: 'Line', path: '/items/Line-low.webp' },
  { id: '33', name: 'Scrap_metal', path: '/items/Scrap_metal-low.webp' },
  { id: '34', name: 'Crow_feather', path: '/items/Crow_feather-low.webp' },
  { id: '35', name: 'Magnifying_lens', path: '/items/Magnifying_lens-low.webp' },
  { id: '36', name: 'Sewing_kit', path: '/items/Sewing_kit-low.webp' },
  { id: '37', name: 'Curators_Rifle', path: '/items/Curators_Rifle-low.webp' },
  { id: '38', name: 'Marine_Flare', path: '/items/Marine_Flare-low.webp' },
  { id: '39', name: 'Simple_arrow', path: '/items/Simple_arrow-low.webp' },
  { id: '40', name: 'Cured_Maple_Sapling', path: '/items/Cured_Maple_Sapling-low.webp' },
  { id: '25', name: 'Moose_hide', path: '/items/Moose_hide-low.webp' },
  { id: '25', name: 'Spray_Paint', path: '/items/Spray_Paint-low.webp' },
  { id: '25', name: 'Cured_leather', path: '/items/Cured_leather-low.webp' },
  { id: '25', name: 'Mountaineering_rope', path: '/items/Mountaineering_rope-low.webp' },
  { id: '25', name: 'Stick', path: '/items/Stick-low.webp' },
  { id: '25', name: 'Deer_hide', path: '/items/Deer_hide-low.webp' },
  { id: '25', name: 'Noisemaker', path: '/items/Noisemaker-low.webp' },
  { id: '25', name: 'Storm_lantern', path: '/items/Storm_lantern-low.webp' },
  { id: '25', name: 'Distress_pistol', path: '/items/Distress_pistol-low.webp' },
  { id: '25', name: 'Old_mans_beard_lichen', path: '/items/Old_mans_beard_lichen-low.webp' },
  { id: '25', name: 'Stump_Remover', path: '/items/Stump_Remover-low.webp' },
  { id: '25', name: 'Dusting_Sulfur', path: '/items/Dusting_Sulfur-low.webp' },
  { id: '25', name: 'Prepared_Birch_Bark', path: '/items/Prepared_Birch_Bark-low.webp' },
  { id: '25', name: 'Survival_bow', path: '/items/Survival_bow-low.webp' },
  { id: '25', name: 'Emergency_stim', path: '/items/Emergency_stim-low.webp' },
  { id: '25', name: 'Prepared_reishi_mushrooms', path: '/items/Prepared_reishi_mushrooms-low.webp' },
  { id: '25', name: 'Vaughns_Rifle', path: '/items/Vaughns_Rifle-low.webp' },
  { id: '25', name: 'Firestriker', path: '/items/Firestriker-low.webp' },
  { id: '25', name: 'Prepared_rose_hips', path: '/items/Prepared_rose_hips-low.webp' },
  { id: '25', name: 'Whetstone', path: '/items/Whetstone-low.webp' },
  { id: '25', name: 'Fishing_tackle', path: '/items/Fishing_tackle-low.webp' },
  { id: '25', name: 'Prybar', path: '/items/Prybar-low.webp' },
  { id: '25', name: 'Wolf_pelt', path: '/items/Wolf_pelt-low.webp' },
  { id: '25', name: 'Flare', path: '/items/Flare-low.webp' },
  { id: '25', name: 'Quality_tools', path: '/items/Quality_tools-low.webp' },
  { id: '25', name: 'Wood_matches', path: '/items/Wood_matches-low.webp' },
  { id: '25', name: 'Flare_shell', path: '/items/Flare_shell-low.webp' },
  { id: '25', name: 'Rabbit_pelt', path: '/items/Rabbit_pelt-low.webp' },
  { id: '25', name: 'Woodwrights_Bow', path: '/items/Woodwrights_Bow-low.webp' },
];
