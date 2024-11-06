import React from "react";
import { handleFormatDescription } from "../../../Utils/products";
import Shipping from "../../../Assets/Icons/Shipping.png";
import "./ProductTextContent.scss";

interface ProductTextContentProps {
  name: string;
  price: number;
  description: string;
}

const ProductTextContent = ({
  name,
  price,
  description,
}: ProductTextContentProps) => {
  return (
    <React.Fragment>
      <h1 className="product_detail_content_h1">{name}</h1>
      <p className="product_detail_content_p">
        ${Number(price).toLocaleString("ES-ar")}
      </p>
      <div className="product_detail_content_description">
        {handleFormatDescription(description).map(
          (sentence: string, index: number) => (
            <p className="product_detail_content_description_p" key={index}>
              {sentence}.
            </p>
          )
        )}
      </div>
      <div className="product_detail_content_shipping">
        <img
          className="product_detail_content_shipping_img"
          src={Shipping}
          alt="Imágen de un camión de envío"
        />
        <p className="product_detail_content_shipping_p">
          Envío gratis en compras mayores a $12.000 y express (sólo CABA) en
          menos de 48hs hábiles
        </p>
      </div>
    </React.Fragment>
  );
};

export default ProductTextContent;
