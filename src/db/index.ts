import { server$ } from '@builder.io/qwik-city';
import { type Prisma } from '@prisma/client';
import { prisma } from '~/root';

export const insertPin = server$(async (pins: Prisma.PinCreateInput[]) => {
  console.log('inserting pin', pins);

  const deleteResult = await prisma.pin.deleteMany();

  console.log(`deleteResult: ${deleteResult.count} pins deleted`);

  const newPin = await prisma.pin.createMany({
    data: pins,
  });

  return newPin;
});

export const getAllPins = server$(async () => {
  console.log('getting all pins');

  const pins = await prisma.pin.findMany();

  console.log('pins', pins);

  return pins;
});
