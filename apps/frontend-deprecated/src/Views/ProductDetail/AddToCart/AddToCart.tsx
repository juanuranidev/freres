import React from "react";
import "./AddToCart.scss";

interface AddToCartProps {
  size: string;
  stock: number;
  amount: number;
  handleAddToCart: () => void;
  setAmount: (amount: number) => void;
}

const AddToCart = ({
  size,
  stock,
  amount,
  setAmount,
  handleAddToCart,
}: AddToCartProps) => {
  const handleIncrement = () => stock > amount && setAmount(amount + 1);
  const handleDecrement = () => amount > 1 && setAmount(amount - 1);

  return (
    <div className="add_to_cart">
      <div className="add_to_cart_div">
        <span
          className="fa fa-minus add_to_cart_div_span"
          onClick={handleDecrement}
        />
        <p className="add_to_cart_div_p">{amount}</p>
        <span
          className="fa fa-plus add_to_cart_div_span"
          onClick={handleIncrement}
        />
      </div>
      {!size ? (
        <button className="add_to_cart_buttonDisabled" disabled>
          AGREGAR AL CARRITO
        </button>
      ) : (
        <button className="add_to_cart_button" onClick={handleAddToCart}>
          AGREGAR AL CARRITO
        </button>
      )}
    </div>
  );
};

export default AddToCart;
