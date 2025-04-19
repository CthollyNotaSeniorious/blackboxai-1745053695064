import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Product 1',
      description: 'Description for product 1',
      price: 19.99,
      image: '/uploads/product1.jpg',
      category: 'Category A',
      stock: 10,
    },
    {
      name: 'Product 2',
      description: 'Description for product 2',
      price: 29.99,
      image: '/uploads/product2.jpg',
      category: 'Category B',
      stock: 15,
    },
    {
      name: 'Product 3',
      description: 'Description for product 3',
      price: 9.99,
      image: '/uploads/product3.jpg',
      category: 'Category A',
      stock: 20,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    });
  }

  console.log('Seed data inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
