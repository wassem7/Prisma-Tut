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

  const user = await prisma.post.findMany({
    where: {
      // name: { not: 'Kwame' },
      // name: {
      //   in: ['Kwame', 'Wassem Darkwa'],
      // },
      // age: {
      //   lte: 20,
      // },
      // email: {
      //   contains: 'gmail',
      // },
      // name: {
      //   startsWith: 'W',
      // },
      author: {
        is: {
          age: 23,
        },
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
