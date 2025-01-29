import {
  Product,
  ProductSize
} from '@/lib/interfaces/product/product.interfaces';

interface Props {
  product: Product;
  selectedSize: ProductSize | null;
  setSelectedSize: (size: ProductSize) => void;
}

export default function Sizes({
  product,
  selectedSize,
  setSelectedSize
}: Props) {
  return (
    <div className="mb-6">
      <h3 className="uppercase text-xs font-medium mb-2">Talle</h3>
      <div className="flex gap-2">
        {product.sizes.map((size) => (
          <button
            key={size.name}
            className={`w-12 h-12 border border-[3px] hover:border-black flex items-center justify-center  ${
              selectedSize?.id === size.id
                ? 'border-black animate-button-press-down'
                : 'border-gray-300'
            }`}
            onClick={() => setSelectedSize(size)}
          >
            <p className="text-xs font-medium">{size.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
