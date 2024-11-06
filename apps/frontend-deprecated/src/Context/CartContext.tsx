import React, { createContext, useEffect, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { ProductModel } from "../Models/product.model";
import { CartModel } from "../Models/cart.model";

const initialValue = {
  cartList: [],
  openCart: false,
  cartTotal: 0,
  orderData: {},
  payment: false,
};

export const CartContext = createContext<CartModel>(initialValue);

export const CartContextProvider = ({ children }: any) => {
  const [payment, setPayment] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartList, setCartList] = useState<ProductModel[]>([]);
  const [orderData, setOrderData] = useState<any>({});
  const [cartTotal, setCartTotal] = useState<number>(0);

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  const addToCart = (product: ProductModel, quantity: number, size: string) => {
    const isInCart = cartList.find(
      (x) => x.id === product.id && x.size === size
    );

    if (isInCart) {
      setCartList((oldCart) =>
        oldCart.map((x) => {
          if (x.id === product.id && x.size === size) {
            return { ...x, quantity: quantity + x.quantity };
          }
          return x;
        })
      );
    } else {
      const newItem = {
        ...product,
        quantity,
        size,
        key: `${size} - ${product.id}`,
      };
      setCartList((oldCart: ProductModel[]) => [...oldCart, newItem]);
    }

    handleOpenCart();
  };

  const deleteFromCart = (product: ProductModel) => {
    const productToDelete = cartList.find((x) => x.key === product.key);

    if (productToDelete) {
      if (productToDelete.quantity === 1) {
        setCartList(cartList.filter((x) => x.key !== product.key));
      } else {
        setCartList(
          cartList.map((x) =>
            x.key === product.key
              ? { ...product, quantity: product.quantity - 1 }
              : x
          )
        );
      }
    }
  };

  const handlePurchase = (
    data: any,
    cartList: ProductModel[],
    cartTotal: number,
    priceDiscount: number
  ) => {
    const order: any = {
      comprador: {
        Nombre: data.Nombre,
        Apellido: data.Apellido,
        Email: data.Email,
        Direccion: data.Direccion,
        Localidad_Ciudad: data.Localidad_Ciudad,
        Apartamento_Habitación: data.Apartamento_Habitación,
        Provincia: data.Provincia,
        Código_Postal: data["Código_Postal"],
        Teléfono: data.Teléfono,
      },
      productos: cartList.map((cartItem) => {
        const { id, name, size, images, price, quantity } = cartItem;
        return { id, name, size, images, price: price * quantity, quantity };
      }),
    };

    if (priceDiscount > 0) {
      order.total = priceDiscount;
    } else if (priceDiscount === 0 && cartTotal >= 12000) {
      order.total = cartTotal;
    } else if (priceDiscount === 0 && cartTotal < 12000) {
      order.total = cartTotal + 750;
    }

    order.idOrden = (
      Math.floor(Math.random() * 123) *
      Date.now() *
      Math.floor((123 + Math.random()) * 123)
    ).toString();

    const dataBase = getFirestore();
    const orderCollection = collection(dataBase, "orders");
    addDoc(orderCollection, order)
      .catch((err) => console.log(err))
      .finally(() => {
        setOrderData(order);
        setCartList([]);
        setCartTotal(0);
        setPayment(true);
      });
  };

  const handleGetCartTotal = () => {
    let cartTotal = 0;

    cartList.forEach((product) => {
      const productTotal = product.quantity * product.price;
      cartTotal += productTotal;
    });

    setCartTotal(cartTotal);
  };

  useEffect(() => {
    handleGetCartTotal();
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{
        payment,
        cartList,
        openCart,
        cartTotal,
        orderData,
        addToCart,
        setPayment,
        setOpenCart,
        setOrderData,
        setCartTotal,
        deleteFromCart,
        handlePurchase,
        handleOpenCart,
        handleCloseCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
