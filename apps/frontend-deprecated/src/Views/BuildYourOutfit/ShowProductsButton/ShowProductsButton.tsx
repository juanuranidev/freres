import React from "react";
import "./ShowProductsButton.scss";

interface ShowItemsButtonProps {
  text: string;
  category: string;
  categoryOfProducts: string;
  handleShowItems: (category: string) => void;
}

function ShowProductsButton({
  text,
  category,
  categoryOfProducts,
  handleShowItems,
}: ShowItemsButtonProps) {
  return (
    <button
      className={`show_products_button ${
        category === categoryOfProducts && "selected"
      }`}
      onClick={() => handleShowItems(categoryOfProducts)}
    >
      {text}
    </button>
  );
}

export default ShowProductsButton;
