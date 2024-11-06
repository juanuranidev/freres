import React from "react";
import ProductSizeButton from "./ProductSizeButton/ProductSizeButton";
import "./ProductSizes.scss";

interface ProductSizesProps {
  sizeType: string;
  size: string;
  setSize: (size: string) => void;
}

const ProductSizes = ({ sizeType, size, setSize }: ProductSizesProps) => {
  if (sizeType === "none") {
    return (
      <div className="product_sizes unique">
        <ProductSizeButton
          productSize="Talle único"
          size={size}
          setSize={setSize}
        />
        {size && (
          <div className="product_sizes_clear">
            <p className="product_sizes_clear_p" onClick={() => setSize("")}>
              LIMPIAR
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="product_sizes">
      <p className="product_sizes_p">TALLE</p>
      <div className="product_sizes_buttons">
        {sizeType === "letter" ? (
          <React.Fragment>
            <ProductSizeButton productSize="XS" size={size} setSize={setSize} />
            <ProductSizeButton productSize="S" size={size} setSize={setSize} />
            <ProductSizeButton productSize="M" size={size} setSize={setSize} />
            <ProductSizeButton productSize="L" size={size} setSize={setSize} />
            <ProductSizeButton productSize="XL" size={size} setSize={setSize} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ProductSizeButton productSize="38" size={size} setSize={setSize} />
            <ProductSizeButton productSize="40" size={size} setSize={setSize} />
            <ProductSizeButton productSize="42" size={size} setSize={setSize} />
            <ProductSizeButton productSize="44" size={size} setSize={setSize} />
          </React.Fragment>
        )}
      </div>
      {size && (
        <div className="product_sizes_clear">
          <p className="product_sizes_clear_p" onClick={() => setSize("")}>
            LIMPIAR
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductSizes;
