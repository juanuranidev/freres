import React, { useState, useEffect, useContext } from "react";
import {
  handleGetProductById,
  handleGetProductsByCategory,
} from "../../Services/products";
import { formatProducts } from "../../Utils/products";
import { ProductModel } from "../../Models/product.model";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../../Components/Loader/Loader";
import AddToCart from "./AddToCart/AddToCart";
import ProductSizes from "./ProductSizes/ProductSizes";
import ProductPanel from "./ProductPanel/ProductPanel";
import ProductImages from "./ProductImages/ProductImages";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import ProductTextContent from "./ProductTextContent/ProductTextContent";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId }: any = useParams();
  const { addToCart, setPayment } = useContext(CartContext);

  const [size, setSize] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(true);
  const [amount, setAmount] = useState<number>(1);
  const [product, setProduct] = useState<ProductModel>();
  const [similarProducts, setSimilarProducts] = useState<ProductModel[]>([]);

  const handleFindProduct = async () => {
    setLoader(true);
    try {
      const response: any = await handleGetProductById(productId);

      if (response.data) {
        setProduct({ id: response.id, ...response.data() } as ProductModel);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  const handleFindSimilarProducts = async () => {
    try {
      const response: any = await handleGetProductsByCategory(
        product?.category
      );
      if (response.docs) {
        setSimilarProducts(formatProducts(response.docs));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    addToCart?.(product!, amount, size);
    setAmount(1);
    setSize("");
    setPayment?.(false);
  };

  useEffect(() => {
    handleFindProduct();
  }, [productId]);

  useEffect(() => {
    setSize("");
    setAmount(1);
    handleFindSimilarProducts();
  }, [product]);

  if (loader) return <Loader />;

  return (
    <section className="product_detail">
      <React.Fragment>
        <motion.div
          className="container"
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          initial={{ x: -100, opacity: 0 }}
        >
          <ProductImages images={product!.images} />
          <div className="product_detail_content">
            <ProductTextContent
              name={product!.name}
              price={product!.price}
              description={product!.description}
            />
            <ProductSizes
              size={size}
              setSize={setSize}
              sizeType={product!.format_of_size_chart}
            />
            <AddToCart
              size={size}
              amount={amount}
              setAmount={setAmount}
              stock={product!.stock}
              handleAddToCart={handleAddToCart}
            />
            <ProductPanel
              title="DETALLES"
              product={product!}
              text={product!.description}
            />
            <ProductPanel
              title="ENVÍOS"
              text="Los envíos son realizados por Correo Argentino y moto mensajería. También podes retirar tu pedido gratis por nuestra oficina en CABA."
              product={product!}
            />
            <ProductPanel
              title="POLÍTICA DE CAMBIOS"
              text="Podrás realizar un cambio hasta 10 días después de haber recibido tu compra. Los productos deberán encontrarse en el mismo estado en que fueron remitidos, sin haber sido utilizados, y con el embalaje y etiquetas originales en buen estado."
              product={product!}
            />
          </div>
        </motion.div>
        {similarProducts.length ? (
          <SimilarProducts product={product!} products={similarProducts} />
        ) : null}
      </React.Fragment>
    </section>
  );
};

export default ProductDetail;
