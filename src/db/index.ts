import { server$ } from '@builder.io/qwik-city';
import { connect } from '@planetscale/database';
import { eq } from 'drizzle-orm/expressions';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
// import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';
import type { NewPin } from '~/constants/data';
import { pins } from './schema';

const connection = connect({
  host: import.meta.env['VITE_DATABASE_HOST'],
  username: import.meta.env['VITE_DATABASE_USERNAME'],
  password: import.meta.env['VITE_DATABASE_PASSWORD'],
});

const db = drizzle(connection, { logger: true });

// this will automatically run needed migrations on the database
// await migrate(db, { migrationsFolder: './drizzle' });

export const insertPin = server$(async (newPins: NewPin[]) => {
  console.log('inserting pins', newPins);

  try {
    // for now we are deleting all pins and re-inserting them
    // regionId is same for all pins in the array, so we can just use the first one
    await db.delete(pins).where(eq(pins.regionId, newPins[0].regionId));

    const result = await db.insert(pins).values(...newPins);

    console.log('insert result: ', result);
  } catch (error) {
    console.error('Error inserting pins: ' + error);
  }
});

export const getAllPins = server$(async () => {
  console.log('getting all pins');

  try {
    const allPins = await db.select().from(pins);
    return allPins;
  } catch (error) {
    console.log('Error getting all pins: ' + error);
  }
});
