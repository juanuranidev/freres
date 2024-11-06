import React from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../../../Models/product.model";
import "./ProductImage.scss";

interface ProductImageProps {
  alt: string;
  product: ProductModel;
}

function ProductImage({ product, alt }: ProductImageProps) {
  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`}>
      <img className="product_image" src={product.images[0]} alt={alt} />
    </Link>
  );
}

export default ProductImage;
