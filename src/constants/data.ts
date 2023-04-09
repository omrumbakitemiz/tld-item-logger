import type { InferModel } from 'drizzle-orm/table';
import type { pins } from '~/db/schema';

export type Pin = InferModel<typeof pins>; // return type when queried
export type NewPin = InferModel<typeof pins, 'insert'>; // insert type

export type Region = (typeof regions)[number];
export type Item = { id: string; name: string; imagePath: string; count: number };

export const regions = [
  { id: '0', name: 'Ash Canyon', imagePath: '/regions/ash-canyon-low.webp' },
  { id: '1', name: 'Blackrock', imagePath: '/regions/blackrock-low.webp' },
  { id: '2', name: 'Bleak Inlet', imagePath: '/regions/bleak-inlet-low.webp' },
  { id: '3', name: 'Broken Railroad', imagePath: '/regions/broken-railroad-low.webp' },
  { id: '4', name: 'Coastal Highway', imagePath: '/regions/coastal-highway-low.webp' },
  { id: '5', name: 'Desolation Point', imagePath: '/regions/desolation-point-low.webp' },
  { id: '6', name: 'Far Range Branch Line', imagePath: '/regions/far-range-branch-line-low.webp' },
  { id: '7', name: 'Forlorn Muskeg', imagePath: '/regions/forlorn-muskeg-low.webp' },
  { id: '8', name: 'Hushed River Valley', imagePath: '/regions/hushed-river-valley-low.webp' },
  { id: '9', name: 'Mountain Town', imagePath: '/regions/mountain-town-low.webp' },
  { id: '10', name: 'Mystery Lake', imagePath: '/regions/mystery-lake-low.webp' },
  { id: '11', name: 'Plesant Valley', imagePath: '/regions/plesant-walley-low.webp' },
  { id: '12', name: 'Timberwolf Mountain', imagePath: '/regions/timberwolf-mountain-low.webp' },
  { id: '13', name: 'Transfer Pass', imagePath: '/regions/transfer-pass-low.webp' },
];

export const items = [
  { id: '0', name: 'Arrow_shaft', imagePath: '/items/Arrow_shaft-low.webp', count: 0 },
  { id: '1', name: 'Green_Maple_Sapling', imagePath: '/items/Green_Maple_Sapling-low.webp', count: 0 },
  { id: '2', name: 'Reclaimed_wood', imagePath: '/items/Reclaimed_wood-low.webp', count: 0 },
  { id: '3', name: 'Arrowhead', imagePath: '/items/Arrowhead-low.webp', count: 0 },
  { id: '4', name: 'Gut', imagePath: '/items/Gut-low.webp', count: 0 },
  { id: '5', name: 'Reishi_mushroom', imagePath: '/items/Reishi_mushroom-low.webp', count: 0 },
  { id: '6', name: 'Barbs_Rifle', imagePath: '/items/Barbs_Rifle-low.webp', count: 0 },
  { id: '7', name: 'Hacksaw', imagePath: '/items/Hacksaw-low.webp', count: 0 },
  { id: '8', name: 'Revolver_Ammunition', imagePath: '/items/Revolver_Ammunition-low.webp', count: 0 },
  { id: '9', name: 'Bear_skin_bedroll', imagePath: '/items/Bear_skin_bedroll-low.webp', count: 0 },
  { id: '10', name: 'Heavy_hammer', imagePath: '/items/Heavy_hammer-low.webp', count: 0 },
  { id: '11', name: 'Revolver_Shell_Casing', imagePath: '/items/Revolver_Shell_Casing-low.webp', count: 0 },
  { id: '12', name: 'Bedroll', imagePath: '/items/Bedroll-low.webp', count: 0 },
  { id: '13', name: 'Hook', imagePath: '/items/Hook-low.webp', count: 0 },
  { id: '14', name: 'Revolver', imagePath: '/items/Revolver-low.webp', count: 0 },
  { id: '15', name: 'Birch_bark', imagePath: '/items/Birch_bark-low.webp', count: 0 },
  { id: '16', name: 'Hunting_rifle', imagePath: '/items/Hunting_rifle-low.webp', count: 0 },
  { id: '17', name: 'Rifle_Shell_Casing', imagePath: '/items/Rifle_Shell_Casing-low.webp', count: 0 },
  { id: '18', name: 'Black_bear_hide', imagePath: '/items/Black_bear_hide-low.webp', count: 0 },
  { id: '19', name: 'Improvised_Crampons', imagePath: '/items/Improvised_Crampons-low.webp', count: 0 },
  { id: '20', name: 'Rifle_ammunition', imagePath: '/items/Rifle_ammunition-low.webp', count: 0 },
  { id: '21', name: 'Bullet', imagePath: '/items/Bullet-low.webp', count: 0 },
  { id: '22', name: 'Improvised_hatchet', imagePath: '/items/Improvised_hatchet-low.webp', count: 0 },
  { id: '23', name: 'Rifle_cleaning_kit', imagePath: '/items/Rifle_cleaning_kit-low.webp', count: 0 },
  { id: '24', name: 'Can_of_Gunpowder', imagePath: '/items/Can_of_Gunpowder-low.webp', count: 0 },
  { id: '25', name: 'Improvised_knife', imagePath: '/items/Improvised_knife-low.webp', count: 0 },
  { id: '26', name: 'Rose_hip', imagePath: '/items/Rose_hip-low.webp', count: 0 },
  { id: '27', name: 'Car_Battery', imagePath: '/items/Car_Battery-low.webp', count: 0 },
  { id: '28', name: 'Jerry_can', imagePath: '/items/Jerry_can-low.webp', count: 0 },
  { id: '29', name: 'Scrap_Lead', imagePath: '/items/Scrap_Lead-low.webp', count: 0 },
  { id: '30', name: 'Cloth', imagePath: '/items/Cloth-low.webp', count: 0 },
  { id: '31', name: 'Line', imagePath: '/items/Line-low.webp', count: 0 },
  { id: '32', name: 'Scrap_metal', imagePath: '/items/Scrap_metal-low.webp', count: 0 },
  { id: '33', name: 'Crow_feather', imagePath: '/items/Crow_feather-low.webp', count: 0 },
  { id: '34', name: 'Magnifying_lens', imagePath: '/items/Magnifying_lens-low.webp', count: 0 },
  { id: '35', name: 'Sewing_kit', imagePath: '/items/Sewing_kit-low.webp', count: 0 },
  { id: '36', name: 'Curators_Rifle', imagePath: '/items/Curators_Rifle-low.webp', count: 0 },
  { id: '37', name: 'Marine_Flare', imagePath: '/items/Marine_Flare-low.webp', count: 0 },
  { id: '38', name: 'Simple_arrow', imagePath: '/items/Simple_arrow-low.webp', count: 0 },
  { id: '39', name: 'Cured_Maple_Sapling', imagePath: '/items/Cured_Maple_Sapling-low.webp', count: 0 },
  { id: '40', name: 'Moose_hide', imagePath: '/items/Moose_hide-low.webp', count: 0 },
  { id: '41', name: 'Spray_Paint', imagePath: '/items/Spray_Paint-low.webp', count: 0 },
  { id: '42', name: 'Cured_leather', imagePath: '/items/Cured_leather-low.webp', count: 0 },
  { id: '43', name: 'Mountaineering_rope', imagePath: '/items/Mountaineering_rope-low.webp', count: 0 },
  { id: '44', name: 'Stick', imagePath: '/items/Stick-low.webp', count: 0 },
  { id: '45', name: 'Deer_hide', imagePath: '/items/Deer_hide-low.webp', count: 0 },
  { id: '46', name: 'Noisemaker', imagePath: '/items/Noisemaker-low.webp', count: 0 },
  { id: '47', name: 'Storm_lantern', imagePath: '/items/Storm_lantern-low.webp', count: 0 },
  { id: '48', name: 'Distress_pistol', imagePath: '/items/Distress_pistol-low.webp', count: 0 },
  { id: '49', name: 'Old_mans_beard_lichen', imagePath: '/items/Old_mans_beard_lichen-low.webp', count: 0 },
  { id: '50', name: 'Stump_Remover', imagePath: '/items/Stump_Remover-low.webp', count: 0 },
  { id: '51', name: 'Dusting_Sulfur', imagePath: '/items/Dusting_Sulfur-low.webp', count: 0 },
  { id: '52', name: 'Prepared_Birch_Bark', imagePath: '/items/Prepared_Birch_Bark-low.webp', count: 0 },
  { id: '53', name: 'Survival_bow', imagePath: '/items/Survival_bow-low.webp', count: 0 },
  { id: '54', name: 'Emergency_stim', imagePath: '/items/Emergency_stim-low.webp', count: 0 },
  { id: '55', name: 'Prepared_reishi_mushrooms', imagePath: '/items/Prepared_reishi_mushrooms-low.webp', count: 0 },
  { id: '56', name: 'Vaughns_Rifle', imagePath: '/items/Vaughns_Rifle-low.webp', count: 0 },
  { id: '57', name: 'Firestriker', imagePath: '/items/Firestriker-low.webp', count: 0 },
  { id: '58', name: 'Prepared_rose_hips', imagePath: '/items/Prepared_rose_hips-low.webp', count: 0 },
  { id: '59', name: 'Whetstone', imagePath: '/items/Whetstone-low.webp', count: 0 },
  { id: '60', name: 'Fishing_tackle', imagePath: '/items/Fishing_tackle-low.webp', count: 0 },
  { id: '61', name: 'Prybar', imagePath: '/items/Prybar-low.webp', count: 0 },
  { id: '62', name: 'Wolf_pelt', imagePath: '/items/Wolf_pelt-low.webp', count: 0 },
  { id: '63', name: 'Flare', imagePath: '/items/Flare-low.webp', count: 0 },
  { id: '64', name: 'Quality_tools', imagePath: '/items/Quality_tools-low.webp', count: 0 },
  { id: '65', name: 'Wood_matches', imagePath: '/items/Wood_matches-low.webp', count: 0 },
  { id: '66', name: 'Flare_shell', imagePath: '/items/Flare_shell-low.webp', count: 0 },
  { id: '67', name: 'Rabbit_pelt', imagePath: '/items/Rabbit_pelt-low.webp', count: 0 },
  { id: '68', name: 'Woodwrights_Bow', imagePath: '/items/Woodwrights_Bow-low.webp', count: 0 },
];
