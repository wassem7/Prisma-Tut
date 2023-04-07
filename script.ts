import { PrismaClient } from '@prisma/client';
import { log } from 'console';
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.findUnique({
  //   where: {
  //     name_age: {
  //       name: 'Wassem Darkwa',
  //       age: 21,
  //     },
  //   },
  // });

  const user = await prisma.user.findMany({
    where: {
      // name: { not: 'Kwame' },
      // name: {
      //   in: ['Kwame', 'Wassem Darkwa'],
      // },
      age: {
        lte: 20,
      },
    },
  });
  console.log(
    '*************************************************************'
  );

  console.log(user);
  console.log(
    '*************************************************************'
  );
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
