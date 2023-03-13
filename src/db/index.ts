import { PrismaClient } from '@prisma/client';
import type { Pin } from '~/constants/data';

const db = new PrismaClient();
console.log('prisma client created');

export const insertPin = async (pin: Pin) => {
  if (pin.coordinate && pin.mapSize) {
    db.pin.create({
      data: {
        id: pin.id,
        count: pin.count,
        item: {
          create: {
            name: pin.item.name,
            path: pin.item.path,
          },
        },
      },
    });
  }
};

export const getAllPins = async () => {
  return await db.pin.findMany({ include: { item: true, mapSize: true, coordinate: true } });
};
