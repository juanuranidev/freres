import React, { useState, useContext } from "react";
import { CartContext } from "../../../../Context/CartContext";
import FreresLogo from "../../../../Assets/Logos/FreresLogo.jpg";
import "./Coupon.scss";

interface CouponProps {
  priceDiscount: number;
  setPriceDiscount: (number: number) => void;
}

const Coupon = ({ priceDiscount, setPriceDiscount }: CouponProps) => {
  const [coupon, setCoupon] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const { cartTotal } = useContext(CartContext);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setCoupon(e.currentTarget.value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCoupon("");
    setLoader(true);
    if (coupon === "FRERESSECRET2022") {
      setTimeout(() => {
        cartTotal - cartTotal * 0.2 <= 12000
          ? setPriceDiscount(cartTotal - cartTotal * 0.2 + 750)
          : setPriceDiscount(cartTotal - cartTotal * 0.2);
        setLoader(false);
      }, 4000);
    } else {
      setTimeout(() => {
        alert("cupón inválido");
        setLoader(false);
      }, 4000);
    }
  };

  if (loader) {
    return (
      <div className="formLoader">
        <img className="formLoader_img" src={FreresLogo} alt="logo Freres" />
      </div>
    );
  }

  if (priceDiscount > 0) {
    return <p className="coupon">CUPÓN DE DESCUENTO APLICADO</p>;
  }

  return (
    <form className="coupon_form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="coupon_form_input"
        placeholder="Cupón de descuento"
        name="coupon_input"
        onChange={(e) => handleChange(e)}
        value={coupon}
      />
      {coupon === "" ? (
        <button className="coupon_form_buttonDisabled" disabled>
          Aplicar
        </button>
      ) : (
        <button className="coupon_form_button">Aplicar</button>
      )}
    </form>
  );
};

export default Coupon;
