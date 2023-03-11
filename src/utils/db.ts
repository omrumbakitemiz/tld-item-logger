import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

// interface MapSizeTable {
//   id: number;
//   width: number;
//   height: number;
// }

// interface CoordinateTable {
//   id: number;
//   x: number;
//   y: number;
// }

// interface PinTable {
//   id: number;
//   count: number;
//   itemId: number;
//   mapSizeId: number;
//   coordinateId: number;
// }

interface ItemsTable {
  id: string;
  name: string;
  path: string;
}

interface Database {
  // mapSize: MapSizeTable;
  // coordinate: CoordinateTable;
  // pin: PinTable;
  items: ItemsTable;
}

const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    host: import.meta.env.VITE_DATABASE_HOST,
    username: import.meta.env.VITE_DATABASE_USERNAME,
    password: import.meta.env.VITE_DATABASE_PASSWORD,
  }),
});

// log connection config
console.log('host, username, password', {
  host: import.meta.env.VITE_DATABASE_HOST,
  username: import.meta.env.VITE_DATABASE_USERNAME,
  password: import.meta.env.VITE_DATABASE_PASSWORD,
});

export const selectItems = async () => {
  try {
    console.log('selectItems starting');

    const tables = await db.introspection.getTables();
    console.log('tables', tables);

    const result = await db.selectFrom('items').select(['id', 'name', 'path']).execute();

    console.log('selectItems ended');

    console.log('selectItems result', result);
    return result;
  } catch (error) {
    console.error('error', error);
  }
};
