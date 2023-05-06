// prisma/seed.ts
const { PrismaClient } = require('@prisma/client')

// initialize Prisma Client
const prisma = new PrismaClient();


async function main() {
  // create two dummy articles
  // for( const product of productsFake ) {
  //   await prisma.product.upsert({
  //       where: { id:product.id },
  //       update: {},
  //       create: {
  //         ...product,
  //         active: false,
  //       },
  //   });
  // }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });