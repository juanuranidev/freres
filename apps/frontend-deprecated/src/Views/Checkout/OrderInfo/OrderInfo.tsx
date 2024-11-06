import React, { useContext } from "react";
import { ProductModel } from "../../../Models/product.model";
import { CartContext } from "../../../Context/CartContext";
import ContentProduct from "../Content/ContentProduct/ContentProduct";
import "./OrderInfo.scss";

const OrderInfo = () => {
  const { orderData } = useContext(CartContext);

  return (
    <div className="orderInfo">
      <div className="orderInfo_products">
        <h2 className="orderInfo_products_h2">PRODUCTOS ADQUIRIDOS</h2>
        {orderData?.productos?.map((product: ProductModel) => (
          <ContentProduct {...product} key={product.id} />
        ))}
      </div>
      <div className="orderInfo_total">
        <p className="orderInfo_total_p">
          Revisa tu casilla de correo: {orderData?.comprador.Email}
        </p>
        <p className="orderInfo_total_p">
          Id de la órden: {orderData?.idOrden}
        </p>
        <p className="orderInfo_total_p">
          Total del pedido: ${orderData?.total}
        </p>
      </div>
    </div>
  );
};

export default OrderInfo;
