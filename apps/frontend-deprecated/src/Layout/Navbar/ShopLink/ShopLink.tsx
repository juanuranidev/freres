import React from "react";
import { Link } from "react-router-dom";
import ImageLink from "../ImageLink/ImageLink";
import "./ShopLink.scss";

const ShopLink = () => {
  return (
    <div className="shopLink">
      <Link to="/shop/all" className="shopLink_a">
        <li className="shopLink_a_li">SHOP</li>
      </Link>
      <div className="shopLink_content">
        <ImageLink
          link="/shop/camperasybuzos"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684813195/HOODIE_BRUN_CLAIR1_untmvb.webp"
          alt="CAMPERAS Y BUZOS"
          p="CAMPERAS Y BUZOS"
        />
        <ImageLink
          link="/shop/remeras"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684731827/Remera_Oversized_Brun1_iuid2l.webp"
          alt="REMERAS"
          p="REMERAS"
        />
        <ImageLink
          link="/shop/pantalones"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1682293947/Freres/Jean_Regular_Celeste_Con_Roturas1_o4i5sz.jpg"
          alt="PANTALONES"
          p="PANTALONES"
        />
        <ImageLink
          link="/shop/calzado"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684889419/BORCEGOS_NOIR2_bf9nwd.webp"
          alt="CALZADO"
          p="CALZADO"
        />
        <ImageLink
          link="/shop/accesorios"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684899712/GORRA_NOIR1_t5bvxy.webp"
          alt="ACCESORIOS"
          p="ACCESORIOS"
        />
        <ImageLink
          link="/shop/all"
          src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684897143/SCENT_250_ML1_rs4tp9.webp"
          alt="TODOS LOS PRODUCTOS"
          p="TODOS LOS PRODUCTOS"
        />
      </div>
    </div>
  );
};

export default ShopLink;
