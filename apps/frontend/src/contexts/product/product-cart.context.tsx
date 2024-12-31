import { ProductSize } from '@/lib/interfaces/product/product.interfaces';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ProductCartItem {
  quantity: number;
  size: ProductSize;
  id: string;
}

interface ProductCartContextType {
  cart: ProductCartItem[];
  handleAddProductToCart: (product: ProductCartItem) => void;
  handleRemoveProductFromCart: (productId: string) => void;
}

interface ProductCartProviderProps {
  children: ReactNode;
}

const ProductCartContext = createContext<ProductCartContextType | undefined>(
  undefined
);

export function ProductCartProvider({ children }: ProductCartProviderProps) {
  const [cart, setCart] = useState<ProductCartItem[]>([]);

  const handleAddProductToCart = (product: ProductCartItem) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id && item.size === product.size
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product }]);
    }
  };

  const handleRemoveProductFromCart = (productId: string) => {
    setCart(
      cart.filter((product: ProductCartItem) => product.id !== productId)
    );
  };

  return (
    <ProductCartContext.Provider
      value={{
        cart,
        handleAddProductToCart,
        handleRemoveProductFromCart
      }}
    >
      {children}
    </ProductCartContext.Provider>
  );
}

export function useProductCartContext() {
  const context = useContext(ProductCartContext);
  if (context === undefined) {
    throw new Error('useProductCart must be used within a ProductCartProvider');
  }
  return context;
}
