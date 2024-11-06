import { ProductModel } from "./product.model";

export type OrderDataModel = {
  idOrden?: string;
  comprador?: any;
  productos?: ProductModel[];
  total?: number;
};

export type CartModel = {
  cartList: ProductModel[];
  setCartList?: (value: ProductModel) => void;
  addToCart?: (product: ProductModel, quantity: number, size: string) => void;
  addMultipleToCart?: (products: ProductModel[], quantiy: number) => void;
  deleteFromCart?: (product: ProductModel) => void;
  openCart: boolean;
  setOpenCart?: (value: boolean) => void;
  payment: boolean;
  setPayment?: (value: boolean) => void;
  handleOpenCart?: () => void;
  handleCloseCart?: () => void;
  cartTotal: number;
  setCartTotal?: (number: number) => void;
  orderData?: OrderDataModel;
  setOrderData?: (order: any) => void;
  handlePurchase?: (
    data: any,
    cartList: ProductModel[],
    cartTotal: number,
    priceDiscount: number
  ) => void;
};
