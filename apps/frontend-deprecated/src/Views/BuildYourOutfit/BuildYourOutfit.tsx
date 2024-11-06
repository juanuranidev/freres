import React, { useEffect, useState } from "react";
import {
  handleGetAllProducts,
  handleGetProductsByCategory,
} from "../../Services/products";
import { formatProducts } from "../../Utils/products";
import { ProductModel } from "../../Models/product.model";
import { motion } from "framer-motion";
import ProductImage from "./ProductImage/ProductImage";
import OutfitProducts from "./OutfitProducts/OutfitProducts";
import TertiaryButton from "../../Components/Buttons/TertiaryButton/TertiaryButton";
import ModalBackground from "../../Components/Modals/ModalBackground/ModalBackground";
import ModalSelectSizes from "../../Components/Modals/ModalSelectSizes/ModalSelectSizes";
import ShowProductsButton from "./ShowProductsButton/ShowProductsButton";
import "./BuildYourOutfit.scss";

const BuildYourOutfit = () => {
  const [pants, setPants] = useState<ProductModel>();
  const [shoes, setShoes] = useState<ProductModel>();
  const [shirt, setShirt] = useState<ProductModel>();
  const [loader, setLoader] = useState<boolean>(false);
  const [hoodie, setHoodie] = useState<ProductModel>();
  const [category, setCategory] = useState<string>("");
  const [modalProducts, setModalProducts] = useState<ProductModel[]>([]);
  const [productsToShow, setProductsToShow] = useState<ProductModel[]>([]);
  const [modalBackground, setModalBackground] = useState<boolean>(false);
  const [modalSelectSizes, setModalSelectSizes] = useState<boolean>(false);

  const handleGetInitialItems = async () => {
    try {
      const response: any = await handleGetAllProducts();
      const productsFormatted: ProductModel[] = formatProducts(response.docs);

      setShirt(
        productsFormatted.find(
          (product: ProductModel) => product.category === "remeras"
        )
      );
      setPants(
        productsFormatted.find(
          (product: ProductModel) => product.category === "pantalones"
        )
      );
      setHoodie(
        productsFormatted.find(
          (product: ProductModel) => product.category === "camperasybuzos"
        )
      );
      setShoes(
        productsFormatted.find(
          (product: ProductModel) => product.category === "calzado"
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowItems = async (categorySelected: string) => {
    setLoader(true);
    setCategory(categorySelected);
    try {
      const response: any = await handleGetProductsByCategory(categorySelected);

      setProductsToShow(formatProducts(response.docs));
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  const handleSetProduct = (product: ProductModel) => {
    if (category === "remeras") {
      setShirt(product);
    } else if (category === "camperasybuzos") {
      setHoodie(product);
    } else if (category === "pantalones") {
      setPants(product);
    } else if (category === "calzado") {
      setShoes(product);
    }
    window.scrollTo(0, 0);
  };

  const handleOpenModalSizes = () => {
    setModalProducts([shirt!, hoodie!, pants!, shoes!]);
    setModalSelectSizes(true);
    setModalBackground(true);
  };

  const handleCloseModalSizes = () => {
    setModalProducts([]);
    setModalSelectSizes(false);
    setModalBackground(false);
  };

  useEffect(() => {
    handleGetInitialItems();
  }, []);

  return (
    <motion.div
      className="build_your_outfit"
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ ease: "linear", duration: 0.25 }}
    >
      <div className="products">
        {!productsToShow.length && (
          <h2 className="products_h2">
            SELECCIONA UNA CATEGORIA PARA MODIFICAR TU OUTFIT
          </h2>
        )}
        <div className="products_div">
          <ShowProductsButton
            text="Remeras"
            category={category}
            categoryOfProducts="remeras"
            handleShowItems={handleShowItems}
          />
          <ShowProductsButton
            category={category}
            text="Camperas y Buzos"
            categoryOfProducts="camperasybuzos"
            handleShowItems={handleShowItems}
          />
          <ShowProductsButton
            text="Pantalones"
            category={category}
            categoryOfProducts="pantalones"
            handleShowItems={handleShowItems}
          />
          <ShowProductsButton
            text="Calzados"
            category={category}
            categoryOfProducts="calzado"
            handleShowItems={handleShowItems}
          />
        </div>
        <OutfitProducts
          productsToShow={productsToShow}
          loader={loader}
          handleSetProduct={handleSetProduct}
        />
      </div>
      <div className="outfit">
        <div className="outfit_div">
          <ProductImage product={shirt!} alt="remera" />
          <ProductImage product={hoodie!} alt="buzo" />
        </div>
        <ProductImage product={pants!} alt="pantalón" />
        <ProductImage product={shoes!} alt="zapatillas" />
        <TertiaryButton
          text="AGREGAR AL CARRITO"
          onClick={handleOpenModalSizes}
        />
      </div>
      <ModalBackground open={modalBackground} close={handleCloseModalSizes} />
      {modalSelectSizes && (
        <ModalSelectSizes
          open={modalSelectSizes}
          close={handleCloseModalSizes}
          modalProducts={modalProducts}
        />
      )}
    </motion.div>
  );
};

export default BuildYourOutfit;
