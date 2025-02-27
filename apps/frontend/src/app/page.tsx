import ProductsList from '@/components/shared/products-list/products-list';
import Outfits from './components/outfits/outfits';
import Stores from './components/stores/stores';
import Image from 'next/image';
import {
  ReadAllProductsResponse,
  readAllProductsService
} from '@/services/product/product.services';
import Link from 'next/link';

export default async function Home() {
  const products: ReadAllProductsResponse = await readAllProductsService({
    limit: 4
  });

  return (
    <main className="relative w-full">
      <div className="relative w-full h-[90dvh]">
        <Image
          fill
          alt="Banner"
          className="object-cover max-h-[90dvh]"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1740105898/freres_new/N6A1282_1_1_hadhse.jpg"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-medium text-white text-center sm:text-6xl">
            Frères Beach Club
          </h1>
          <Link
            href="/shop"
            className="px-8 py-3 text-white border border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-xl"
          >
            Ver productos
          </Link>
        </div>
      </div>
      <div>
        <div className="flex justify-center pt-20 pb-10 text-center sm:justify-start sm:pl-10">
          <p className="text-2xl font-medium">Novedades</p>
          <p className="text-2xl font-light mx-2">|</p>
          <p className="text-2xl font-light">Productos</p>
        </div>
        <div className="max-w-[90rem] mx-auto px-5 sm:px-10">
          <ProductsList products={products.data} isLoading={false} />
        </div>
      </div>
      <Outfits />
      <Stores />
    </main>
  );
}
