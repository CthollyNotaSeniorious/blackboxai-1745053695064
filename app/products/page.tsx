import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const revalidate = 0;

export default async function ProductsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category || '';

  const categories = await prisma.product.findMany({
    distinct: ['category'],
    select: { category: true },
  });

  const products = await prisma.product.findMany({
    where: category ? { category } : {},
  });

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="mb-4">
        <span className="mr-2 font-semibold">Filter by Category:</span>
        <Link href="/products" className={`mr-2 ${category === '' ? 'font-bold underline' : ''}`}>
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.category}
            href={`/products?category=${encodeURIComponent(cat.category)}`}
            className={`mr-2 ${category === cat.category ? 'font-bold underline' : ''}`}
          >
            {cat.category}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline mt-2 block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
