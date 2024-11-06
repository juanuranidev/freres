import React, { useState, useEffect } from "react";
import { handleGetMasterpieceProducts } from "../../../Services/products";
import { formatProducts } from "../../../Utils/products";
import { ProductModel } from "../../../Models/product.model";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton/PrimaryButton";
import ProductList from "../../../Components/ProductList/ProductList";
import Loader from "../../../Components/Loader/Loader";
import "./Masterpieces.scss";

const Masterpieces = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductModel[]>([]);

  const handleGetProducts = async () => {
    setLoader(true);
    try {
      const response: any = await handleGetMasterpieceProducts();
      setProducts(formatProducts(response.docs));
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  if (loader) return <Loader />;
  if (!products.length) return null;

  return (
    <section className="masterpieces">
      <h2 className="masterpieces_h2">MASTERPIECES</h2>
      <div className="masterpieces_div">
        <ProductList products={products} />
      </div>
      <div className="masterpieces_button">
        <PrimaryButton link="/shop/all" text="TODOS LOS PRODUCTOS" />
      </div>
    </section>
  );
};

export default Masterpieces;
