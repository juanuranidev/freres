import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import OrderStatus from "./OrderStatus/OrderStatus";
import OrderInfo from "./OrderInfo/OrderInfo";
import Content from "./Content/Content";
import Loader from "../../Components/Loader/Loader";
import Form from "./Form/Form";
import "./Checkout.scss";

const Checkout = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [priceDiscount, setPriceDiscount] = useState<number>(0);

  const { orderData, payment } = useContext(CartContext);

  useEffect(() => {
    setLoader(false);
  }, [payment]);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="checkout">
      {payment && orderData ? (
        <OrderStatus />
      ) : (
        <Form priceDiscount={priceDiscount} setLoader={setLoader} />
      )}
      {payment && orderData ? (
        <OrderInfo />
      ) : (
        <Content
          priceDiscount={priceDiscount}
          setPriceDiscount={setPriceDiscount}
        />
      )}
    </div>
  );
};

export default Checkout;
