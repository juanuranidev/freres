import React from "react";
import { motion } from "framer-motion";
import { ProductModel } from "../../Models/product.model";
import Product from "./Product/Product";
import "./ProductList.scss";

interface ProductListProps {
  products: ProductModel[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product_list">
      {products.map((product: ProductModel, index: number) => (
        <motion.div
          key={product.id}
          className="product_list_div"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: "-5%" }}
          transition={{ delay: index * 0.1 }}
        >
          <Product {...product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
