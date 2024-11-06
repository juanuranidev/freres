import React, { useState, useContext, useEffect } from "react";
import { ProductModel } from "../../../Models/product.model";
import { CartContext } from "../../../Context/CartContext";
import ProductSizes from "../../../Views/ProductDetail/ProductSizes/ProductSizes";
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton";
import "./ModalSelectSizes.scss";

interface ModalSelectSizesProps {
  open: boolean;
  close: () => void;
  modalProducts: ProductModel[];
}

const ModalSelectSizes = ({
  open,
  close,
  modalProducts,
}: ModalSelectSizesProps) => {
  const { addToCart } = useContext(CartContext);

  const [size, setSize] = useState<string>("");
  const [modalProduct, setModalProduct] = useState<number>(0);
  const [productsWithSizes, setProductWithSizes] = useState<ProductModel[]>([]);

  const handleNext = () => setModalProduct((prev) => prev + 1);
  const handlePrevious = () => setModalProduct((prev) => prev - 1);

  const handleGetSize = () => {
    const product = modalProducts[modalProduct];
    const exist = productsWithSizes.find((p) => p.id === product.id);

    if (exist?.size) {
      setSize(exist.size);
    } else {
      setSize("");
      setProductWithSizes(productsWithSizes.filter((p) => p.id !== product.id));
    }
  };

  const handleSetSize = (size: string) => {
    const product = modalProducts[modalProduct];
    const hasASize = productsWithSizes.some((p) => p.id === product.id);
    setSize(size);

    if (hasASize) {
      setProductWithSizes((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? { ...p, size } : p))
      );
    } else {
      setProductWithSizes((prevProducts) => [
        ...prevProducts,
        { ...product, size },
      ]);
    }
  };

  const handleAddToCart = () => {
    productsWithSizes.forEach((product) =>
      addToCart?.(product, 1, product.size)
    );
    close();
  };

  useEffect(() => {
    handleGetSize();
  }, [modalProduct, size]);

  return (
    <div
      className={`modal_select_sizes ${open && "modal_select_sizes_visible"} `}
    >
      <div className="modal_select_sizes_close">
        <p className="modal_select_sizes_close_p" onClick={close}>
          CERRAR
        </p>
      </div>
      <h2 className="modal_select_sizes_h2">Selecciona el talle para</h2>
      <h2 className="modal_select_sizes_h2">
        {modalProducts[modalProduct]?.name}
      </h2>
      <img
        src={modalProducts[modalProduct]?.images[0]}
        className="modal_select_sizes_img"
      />
      <ProductSizes
        sizeType={modalProducts[modalProduct]?.format_of_size_chart}
        size={size}
        setSize={handleSetSize}
      />
      <div className="modal_select_sizes_div">
        <div
          className={`modal_select_sizes_div_actions${
            modalProduct === 0 ? " first" : ""
          }`}
        >
          {modalProduct !== 0 && (
            <p
              onClick={handlePrevious}
              className="modal_select_sizes_div_actions_p"
            >
              ANTERIOR
            </p>
          )}
          {modalProduct !== modalProducts.length - 1 && (
            <p
              onClick={handleNext}
              className="modal_select_sizes_div_actions_p"
            >
              SIGUIENTE
            </p>
          )}
        </div>
        {modalProduct === modalProducts.length - 1 && (
          <TertiaryButton
            text="AGREGAR AL CARRITO"
            onClick={handleAddToCart}
            disabled={!productsWithSizes.length}
          />
        )}
      </div>
    </div>
  );
};

export default ModalSelectSizes;
