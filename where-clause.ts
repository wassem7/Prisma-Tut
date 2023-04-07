import { PrismaClient } from '@prisma/client';
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
      name: 'Kwame',
    },
    // distinct: ['name', 'age'],
    // take: 2,
    orderBy: {
      age: 'asc',
    },
  });

  console.log(user);
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
