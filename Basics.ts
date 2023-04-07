import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['query'] });

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: 'Wassem Darkwa',
      age: 21,
      email: 'wassemdarkwa@gmail.com',
      userpreferences: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // include: {
    //   userpreferences: true,
    // },

    select: {
      userpreferences: {
        select: {
          id: true,
        },
      },
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
