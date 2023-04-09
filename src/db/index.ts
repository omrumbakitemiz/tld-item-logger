import { server$ } from '@builder.io/qwik-city';
import { connect } from '@planetscale/database';
import { eq } from 'drizzle-orm/mysql-core/expressions';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import type { NewPin } from '~/constants/data';
import { pins } from './schema';

const connection = connect({
  host: import.meta.env['VITE_DATABASE_HOST'],
  username: import.meta.env['VITE_DATABASE_USERNAME'],
  password: import.meta.env['VITE_DATABASE_PASSWORD'],
});

const db = drizzle(connection, { logger: import.meta.env.DEV && false });
console.log(`drizzle db connection created now: ${new Date().toUTCString()}`);

export const insertPin = server$(async (newPin: NewPin) => {
  console.log('inserting pin', newPin);

  try {
    const result = await db.insert(pins).values(newPin);

    console.log(`insert result: ${result.rowsAffected} rows affected in ${result.time}ms`);

    return result;
  } catch (error) {
    console.error('Error inserting pins: ' + error);
  }
});

export const getAllPins = server$(async () => {
  try {
    const start = Date.now();
    const allPins = await db.select().from(pins);
    const end = Date.now();
    console.log(`get all pins took ${end - start}ms`);
    return allPins;
  } catch (error) {
    console.log('Error getting all pins: ' + error);
  }
});

export const getPinsByRegionId = server$(async (regionId: string) => {
  try {
    const start = Date.now();
    const pinsByRegionId = await db.select().from(pins).where(eq(pins.regionId, regionId));
    const end = Date.now();
    console.log(`get pins by region id took ${end - start}ms`);
    return pinsByRegionId;
  } catch (error) {
    console.log('Error getting pins by region id: ' + error);
  }
});

export const deletePinsByRegionId = server$(async (regionId: string) => {
  try {
    const result = await db.delete(pins).where(eq(pins.regionId, regionId));
    console.log(`delete pins result: ${result.rowsAffected} rows affected in ${result.time}ms`);
    return result;
  } catch (error) {
    console.log('Error deleting pins: ' + error);
  }
});
