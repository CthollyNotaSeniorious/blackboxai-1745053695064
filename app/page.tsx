import Link from 'next/link';
import { prisma } from '../lib/prisma';

export const revalidate = 0;

export default async function Home() {
  const latestProducts = await prisma.product.findMany({
    orderBy: { id: 'desc' },
    take: 4,
  });

  return (
    <main className="container mx-auto p-4">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Simple Online Store</h1>
        <p className="mb-6">Find the best products at great prices.</p>
        <Link href="/login" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Login / Register
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
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
      </section>
    </main>
  );
}
