import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProductCartContext } from '@/contexts/product/product-cart.context';
import { formatProductPriceLib } from '@/lib/helpers/product/product.helpers';
import { Product } from '@/lib/interfaces/product/product.interfaces';
import OrderProduct from '../order-product/order-product';

export default function OrderSummary() {
  const { cart, getCartTotal } = useProductCartContext();

  return (
    <div className="flow-root w-[50%]">
      {cart.map((product: Product) => (
        <OrderProduct key={product.id} product={product} />
      ))}
      <div className="space-y-4 py-4">
        <div className="flex items-center justify-between">
          <Input
            type="text"
            placeholder="Código de descuento"
            className="bg-white-500"
          />
          <Button variant="default" className="ml-4 h-12">
            Aplicar
          </Button>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-900">Subtotal</p>
          <p className="text-xs font-medium text-gray-900">
            {formatProductPriceLib(getCartTotal())}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-900">Envío</p>
          <p className="text-xs font-medium text-gray-500">
            Introducir la dirección de envío
          </p>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-lg font-bold text-gray-900">Total</p>
          <p className="text-lg font-bold text-gray-900">
            <span className="text-xs font-normal">ARS</span>{' '}
            {formatProductPriceLib(getCartTotal())}
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-0">
          Incluye $ 0,00 de impuestos
        </p>
      </div>
    </div>
  );
}
