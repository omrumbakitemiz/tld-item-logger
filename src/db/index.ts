import { server$ } from '@builder.io/qwik-city';
import { PrismaClient, type Prisma } from '@prisma/client';

export const insertPin = server$(async (pins: Prisma.PinCreateInput[]) => {
  const prisma = new PrismaClient();

  console.log('inserting pin', pins);

  const deleteResult = await prisma.pin.deleteMany();

  console.log(`deleteResult: ${deleteResult.count} pins deleted`);

  const newPin = await prisma.pin.createMany({
    data: pins,
  });

  return newPin;
});

export const getAllPins = server$(async () => {
  const prisma = new PrismaClient();

  console.log('getting all pins');

  const pins = await prisma.pin.findMany();

  console.log('pins', pins);

  return pins;
});
