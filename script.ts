import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
