import React from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../../../Models/product.model";
import Sizes from "../../Sizes/Sizes";
import "./Product.scss";

const Product = (product: ProductModel) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          className="product_img"
          alt="imágen de producto"
          loading="lazy"
        />
      </Link>
      <div className="product_div">
        <h2 className="product_div_h2">{product.name}</h2>
        <p className="product_div_p">
          ${Number(product.price).toLocaleString("ES-ar")}
        </p>
      </div>
      <div className="product_sizes">
        <p className="product_sizes_p">AGREGADO RÁPIDO</p>
        <Sizes sizeType={product.format_of_size_chart} product={product} />
      </div>
    </div>
  );
};

export default Product;
