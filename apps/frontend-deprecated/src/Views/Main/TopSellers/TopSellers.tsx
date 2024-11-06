import React, { useState, useEffect } from "react";
import { handleGetTopSellerProducts } from "../../../Services/products";
import { formatProducts } from "../../../Utils/products";
import { ProductModel } from "../../../Models/product.model";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton/PrimaryButton";
import ProductList from "../../../Components/ProductList/ProductList";
import Loader from "../../../Components/Loader/Loader";
import "./TopSellers.scss";

const TopSellers = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductModel[]>([]);

  const handleGetProducts = async () => {
    setLoader(true);
    try {
      const response: any = await handleGetTopSellerProducts();
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
  if (!products!.length) return null;

  return (
    <section className="top_sellers">
      <h2 className="top_sellers_h2">TOP SELLERS</h2>
      <div className="top_sellers_div">
        <ProductList products={products!} />
      </div>
      <div className="top_sellers_button">
        <PrimaryButton link="/shop/all" text="TODOS LOS PRODUCTOS" />
      </div>
    </section>
  );
};

export default TopSellers;
