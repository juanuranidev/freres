import React from "react";
import { ProductModel } from "../../../../Models/product.model";
import "./ContentProduct.scss";

const ContentProduct = (product: ProductModel) => {
  return (
    <div className="contentProduct">
      <div className="contentProduct_div_image">
        <img
          className="contentProduct_div_img"
          src={product.images[0]}
          alt="Imágen del producto del carrito"
        />
        <span className="contentProduct_div_span">{product.quantity}</span>
      </div>
      <div className="contentProduct_div_text">
        <h2 className="contentProduct_div_h2">{product.name}</h2>
        <p className="contentProduct_div_p">{product.size}</p>
      </div>
      <p className="contentProduct_p">
        ${(product.quantity * product.price).toLocaleString("ar")}
      </p>
    </div>
  );
};

export default ContentProduct;
