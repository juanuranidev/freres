import React, { useState, useEffect } from "react";
import { handleGetEssentialOutfitProducts } from "../../Services/products";
import { formatProducts } from "../../Utils/products";
import { ProductModel } from "../../Models/product.model";
import { motion } from "framer-motion";
import Loader from "../../Components/Loader/Loader";
import StreetOutfit from "../../Assets/Images/StreetOutfit.jpg";
import CasualOutfit from "../../Assets/Images/CasualOutfit.jpg";
import EssentialOutfit from "./EssentialOutfit/EssentialOutfit";
import ModalBackground from "../../Components/Modals/ModalBackground/ModalBackground";
import ModalSelectSizes from "../../Components/Modals/ModalSelectSizes/ModalSelectSizes";
import "./EssentialOutfits.scss";

const EssentialOutfits = () => {
  const [loader, setLoader] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [casualOutfit, setCasualOutfit] = useState<ProductModel[]>([]);
  const [streetOutfit, setStreetOutfit] = useState<ProductModel[]>([]);
  const [modalProducts, setModalProducts] = useState<ProductModel[]>([]);
  const [modalBackground, setModalBackground] = useState<boolean>(false);
  const [modalSelectSizes, setModalSelectSizes] = useState<boolean>(false);

  const handleGetProducts = async () => {
    setLoader(true);
    try {
      const response: any = await handleGetEssentialOutfitProducts();
      setProducts(formatProducts(response.docs));
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  const handleFilterProducts = () => {
    setCasualOutfit(
      products.filter(
        (product: ProductModel) => product.essential_outfit === "casual"
      )
    );
    setStreetOutfit(
      products.filter(
        (product: ProductModel) => product.essential_outfit === "street"
      )
    );
  };

  const handleOpenModalSizes = (productsForModal: ProductModel[]) => {
    setModalProducts(productsForModal);
    setModalSelectSizes(true);
    setModalBackground(true);
  };

  const handleCloseModalSizes = () => {
    setModalProducts([]);
    setModalSelectSizes(false);
    setModalBackground(false);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    if (products.length) {
      handleFilterProducts();
    }
  }, [products]);

  if (loader) return <Loader />;

  return (
    <div className="essential_outfits">
      <motion.div
        className="essential_outfits_div"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ ease: "linear", duration: 0.25 }}
      >
        <EssentialOutfit
          name={"STREET"}
          imageDirection={"right"}
          link={"/outfit/street"}
          products={streetOutfit}
          image={StreetOutfit}
          handleOpenModalSizes={() => handleOpenModalSizes(streetOutfit)}
        />
        <EssentialOutfit
          name={"CASUAL"}
          imageDirection={"left"}
          link={"/outfit/casual"}
          products={casualOutfit}
          image={CasualOutfit}
          handleOpenModalSizes={() => handleOpenModalSizes(casualOutfit)}
        />
      </motion.div>
      <ModalBackground open={modalBackground} close={handleCloseModalSizes} />
      {modalSelectSizes && (
        <ModalSelectSizes
          open={modalSelectSizes}
          close={handleCloseModalSizes}
          modalProducts={modalProducts}
        />
      )}
    </div>
  );
};

export default EssentialOutfits;
