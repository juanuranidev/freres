import React, { useState, useEffect } from "react";
import { handleGetProductsByEssentialOutfit } from "../../Services/products";
import { formatProducts } from "../../Utils/products";
import { ProductModel } from "../../Models/product.model";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../../Components/Loader/Loader";
import ProductList from "../../Components/ProductList/ProductList";
import TertiaryButton from "../../Components/Buttons/TertiaryButton/TertiaryButton";
import ModalBackground from "../../Components/Modals/ModalBackground/ModalBackground";
import ModalSelectSizes from "../../Components/Modals/ModalSelectSizes/ModalSelectSizes";
import "./EssentialOutfitDetail.scss";

const EssentialOutfitDetail = () => {
  const { idOutfit } = useParams();

  const [loader, setLoader] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [modalSelectSizes, setModalSelectSizes] = useState<boolean>(false);

  const handleGetProducts = async () => {
    setLoader(true);
    try {
      const response: any = await handleGetProductsByEssentialOutfit(idOutfit);
      setProducts(formatProducts(response.docs));
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  useEffect(() => {
    handleGetProducts();
  }, [idOutfit]);

  if (loader) return <Loader />;

  return (
    <section className="essential_outfit_detail">
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ ease: "linear", duration: 0.25 }}
        className="essential_outfit_detail_content"
      >
        <div className="essential_outfit_detail_content_div">
          <h1 className="essential_outfit_detail_content_h1">
            {idOutfit} Outfit
          </h1>
          <img
            src={products[0]?.essential_outfit_image}
            className="essential_outfit_detail_content_img"
            alt="Imagen de producto"
          />
          <TertiaryButton
            text="AGREGAR AL CARRITO"
            onClick={() => setModalSelectSizes(true)}
          />
        </div>
        <div className="essential_outfit_detail_content_products">
          <ProductList products={products} />
        </div>
      </motion.div>
      <ModalSelectSizes
        open={modalSelectSizes}
        modalProducts={products}
        close={() => setModalSelectSizes(false)}
      />
      <ModalBackground
        open={modalSelectSizes}
        close={() => setModalSelectSizes(false)}
      />
    </section>
  );
};

export default EssentialOutfitDetail;
