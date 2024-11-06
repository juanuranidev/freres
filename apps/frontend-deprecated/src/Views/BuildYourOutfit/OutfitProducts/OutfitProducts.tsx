import React from "react";
import { motion } from "framer-motion";
import { ProductModel } from "../../../Models/product.model";
import FreresLogoWithoutBackground from "../../../Assets/Logos/FreresLogoWithoutBackground.png";
import "./OutfitProducts.scss";

interface OutfitProductsProps {
  loader: boolean;
  productsToShow: ProductModel[];
  handleSetProduct: (product: ProductModel) => void;
}

const OutfitProducts = ({
  loader,
  productsToShow,
  handleSetProduct,
}: OutfitProductsProps) => {
  if (loader) {
    return (
      <div className="outfit_products_loading">
        <img
          src={FreresLogoWithoutBackground}
          className="outfit_products_loading_img"
          alt="Freres logo"
        />
      </div>
    );
  }

  return (
    <div className="outfit_products">
      {!loader &&
        productsToShow.map((product: ProductModel, index: number) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: "-5%" }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              key={product.id}
              src={product.images[0]}
              className="outfit_products_img"
              onClick={() => handleSetProduct(product)}
              alt={product.name}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default OutfitProducts;
