import React, { useState, useEffect } from "react";
import {
  handleGetAllProducts,
  handleGetProductsByCategory,
} from "../../Services/products";
import { formatProducts } from "../../Utils/products";
import { ProductModel } from "../../Models/product.model";
import { useParams } from "react-router-dom";
import ButtonCategories from "./ButtonCategories/CategoryButtons";
import ProductList from "../../Components/ProductList/ProductList";
import Loader from "../../Components/Loader/Loader";
import "./Shop.scss";

const Shop = () => {
  const { idCategory } = useParams();

  const [loader, setLoader] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductModel[]>([]);

  const handleGetProducts = async () => {
    setLoader(true);
    try {
      if (idCategory === "all") {
        const response: any = await handleGetAllProducts();
        setProducts(formatProducts(response.docs));
      } else {
        const response: any = await handleGetProductsByCategory(idCategory);
        setProducts(formatProducts(response.docs));
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  useEffect(() => {
    handleGetProducts();
  }, [idCategory]);

  if (loader) return <Loader />;

  return (
    <section className="shop">
      <div className="shop_categories">
        <ButtonCategories />
      </div>
      <div className="shop_div">
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default Shop;
