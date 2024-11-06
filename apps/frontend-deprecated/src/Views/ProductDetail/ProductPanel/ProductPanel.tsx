import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductModel } from "../../../Models/product.model";
import "./ProductPanel.scss";

interface ProductPanelProps {
  title: string;
  text: string;
  product: ProductModel;
}

const ProductPanel = ({ title, text, product }: ProductPanelProps) => {
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    setShowText(false);
  }, [product]);

  return (
    <div className="product_panel">
      <div
        className="product_panel_principal"
        onClick={() => setShowText(!showText)}
      >
        <h4 className="product_panel_principal_h4">{title}</h4>
        <span
          className={`product_panel_principal_button fas fa-angle-${
            showText ? "down" : "right"
          }`}
        />
      </div>
      <AnimatePresence>
        {showText && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-5%" }}
            initial={{ opacity: 0, y: "-5%" }}
            transition={{ type: "linear", stiffness: 100, duration: 0.5 }}
          >
            <div className={`product_panel_secondary ${showText && "show"}`}>
              <p className="product_panel_secondary_p">{text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPanel;
