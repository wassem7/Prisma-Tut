import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: { name: 'Widdad Yahya' },
  //   });
  
  
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
