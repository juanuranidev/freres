import React from "react";
import { ProductModel } from "../../../Models/product.model";
import ProductList from "../../../Components/ProductList/ProductList";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton/PrimaryButton";
import TertiaryButton from "../../../Components/Buttons/TertiaryButton/TertiaryButton";
import "./EssentialOutfit.scss";

interface EssentialOutfitProps {
  name: string;
  link: string;
  image: string;
  products: ProductModel[];
  imageDirection: string;
  handleOpenModalSizes: () => void;
}

const EssentialOutfit = ({
  name,
  link,
  image,
  products,
  imageDirection,
  handleOpenModalSizes,
}: EssentialOutfitProps) => {
  return (
    <div className={`essential_outfit ${imageDirection === "left" && "left"}`}>
      <div className="essential_outfit_products">
        <h2 className="essential_outfit_products_h2">{name}</h2>
        <div className="essential_outfit_products_div">
          <ProductList products={products} />
        </div>
        <div className="essential_outfit_button">
          <PrimaryButton link={link} text="VER CONJUNTO" />
          <TertiaryButton
            text="AGREGAR AL CARRITO"
            onClick={handleOpenModalSizes}
          />
        </div>
      </div>
      <div className="essential_outfit_image">
        <img
          className="essential_outfit_image_img"
          src={image}
          alt="Imagen de outfit"
        />
      </div>
    </div>
  );
};

export default EssentialOutfit;
