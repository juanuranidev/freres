import React, { useContext } from "react";
import { ProductModel } from "../../Models/product.model";
import { CartContext } from "../../Context/CartContext";
import "./Sizes.scss";

interface SizesProps {
  sizeType: string;
  product: ProductModel;
}

const Sizes = ({ sizeType, product }: SizesProps) => {
  const { addToCart, setPayment } = useContext(CartContext);

  const handleAddToCart = (
    product: ProductModel,
    quantity: number,
    size: string
  ) => {
    addToCart?.(product, quantity, size);
    setPayment?.(false);
  };

  if (sizeType === "letter") {
    return (
      <div className="sizes">
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "XS")}
        >
          XS
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "S")}
        >
          S
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "M")}
        >
          M
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "L")}
        >
          L
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "XL")}
        >
          XL
        </button>
      </div>
    );
  }

  if (sizeType === "number") {
    return (
      <div className="sizes">
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "38")}
        >
          38
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "40")}
        >
          40
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "41")}
        >
          41
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "42")}
        >
          42
        </button>
        <button
          className="sizes_button"
          onClick={() => handleAddToCart(product, 1, "44")}
        >
          44
        </button>
      </div>
    );
  }

  if (sizeType === "none") {
    return (
      <div className="sizes">
        <button
          className="sizes_buttonAddToCart"
          onClick={() => handleAddToCart(product, 1, "Talle único")}
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    );
  }

  return null;
};

export default Sizes;
