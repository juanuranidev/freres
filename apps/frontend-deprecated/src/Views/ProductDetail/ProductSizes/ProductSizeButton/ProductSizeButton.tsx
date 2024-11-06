import React from 'react';
import './ProductSizebutton.scss';

interface ProductSizeButtonProps{
    productSize:  string;
    size: string;
    setSize: (value: string) => void;
}

const ProductSizeButton = ({productSize, size, setSize}: ProductSizeButtonProps) => {
    
  return (
    <button onClick={() => setSize(productSize)} className={size===productSize ? 'productSizes_button active' : 'productSizes_button'}>{productSize}</button>
  );
}

export default ProductSizeButton;