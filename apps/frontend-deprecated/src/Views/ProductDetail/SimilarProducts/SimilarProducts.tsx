import React, { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/product.model";
import ProductList from "../../../Components/ProductList/ProductList";
import "./SimilarProducts.scss";

interface SimilarProductsProps {
  product: ProductModel;
  products: ProductModel[];
}

const SimilarProducts = ({ product, products }: SimilarProductsProps) => {
  const [similarProducts, setSimilarProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    setSimilarProducts(
      products
        .filter((prod) => prod.id !== product.id)
        .sort(() => 0.5 - Math.random())
        .splice(1, 4)
    );
  }, [product]);

  return (
    similarProducts && (
      <div className="similar_products">
        <h2 className="similar_products_h2">TAMBIÉN TE PUEDE GUSTAR</h2>
        <div className="similar_products_div">
          <ProductList products={similarProducts} />
        </div>
      </div>
    )
  );
};

export default SimilarProducts;
