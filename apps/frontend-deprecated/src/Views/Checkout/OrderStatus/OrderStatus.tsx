import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import SecondaryButton from "../../../Components/Buttons/SecondaryButton/SecondaryButton";
import "./OrderStatus.scss";

const OrderStatus = () => {
  const { orderData, setPayment } = useContext(CartContext);

  return (
    <div className="orderStatus">
      <div className="orderStatus_div">
        <h2 className="orderStatus_div_h2">
          ¡GRACIAS {orderData?.comprador.Nombre}!
        </h2>
        <p className="orderStatus_div_p">TU PEDIDO HA SIDO RECIBIDO.</p>
        <SecondaryButton
          text="Volver al inicio"
          link="/"
          onClick={() => setPayment?.(false)}
        />
      </div>
    </div>
  );
};

export default OrderStatus;
