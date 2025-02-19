import {
  Product,
  ProductSize
} from '@/lib/interfaces/product/product.interfaces';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ProductCartContextType {
  cart: Product[];
  handleClearCart: () => void;
  handleAddProductToCart: (product: Product) => void;
  handleRemoveProductFromCart: (productId: string, size: ProductSize) => void;
  getCartTotal: () => number;
  getFreeShippingRemaining: () => number;
  isOpenCart: boolean;
  handleOpenCart: () => void;
  handleCloseCart: () => void;
}

interface ProductCartProviderProps {
  children: ReactNode;
}

const ProductCartContext = createContext<ProductCartContextType | undefined>(
  undefined
);

export function ProductCartProvider({ children }: ProductCartProviderProps) {
  const FREE_SHIPPING_THRESHOLD = 140000;

  const [cart, setCart] = useState<Product[]>([]);
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

  const handleAddProductToCart = (product: Product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id && item.size === product.size
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === product.size
            ? {
                ...item,
                quantity: (item.quantity ?? 0) + (product.quantity ?? 0)
              }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product }]);
    }
  };

  const handleRemoveProductFromCart = (
    productId: string,
    size: ProductSize
  ) => {
    setCart(
      cart.filter(
        (product: Product) => product.id !== productId || product.size !== size
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
  };

  const getFreeShippingRemaining = () => {
    const total = getCartTotal();
    return total >= FREE_SHIPPING_THRESHOLD
      ? 0
      : FREE_SHIPPING_THRESHOLD - total;
  };

  const handleOpenCart = () => {
    setIsOpenCart(true);
  };

  const handleCloseCart = () => {
    setIsOpenCart(false);
  };

  return (
    <ProductCartContext.Provider
      value={{
        cart,
        handleClearCart,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        getCartTotal,
        getFreeShippingRemaining,
        isOpenCart,
        handleOpenCart,
        handleCloseCart
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
