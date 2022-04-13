import React, { useState, useContext } from 'react';
import { CartContext, ProductModel } from '../../../Context/CartContext';
import ArrowDown from './Img/ArrowDown.png';
import ContentProduct from './ContentProduct/ContentProduct';
import Coupon from './Coupon/Coupon';
import './Content.scss';

const Content = () => {
  const [priceDiscount, setPriceDiscount] = useState<number>(0);
  const { cartList, cartTotal } = useContext(CartContext);
  
  return (
    <div className='content'>
      <div className='content_products'>
        {cartList.length >= 4 && 
        <div className='content_products_div'>
          <p className='content_products_div_p'>Más productos</p>
          <img className='content_products_div_img' src={ArrowDown} />
        </div>}
        {cartList.map((product: ProductModel) => <ContentProduct {...product} key={product.id} />)}
      </div>
      <div className='content_coupon'>
        <Coupon priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount} />
      </div>
      <div className='content_subTotal'>
        {priceDiscount > 0
        ? <p className='content_subTotal_withDiscount'>Subtotal: ${(cartTotal).toLocaleString("ar")}</p>
        : <p className='content_subTotal_p'>Subtotal: ${(cartTotal).toLocaleString("ar")}</p>}
        {priceDiscount > 0 && <p className='content_subTotal_discount'>Subtotal: ${(priceDiscount).toLocaleString("ar")}</p>}
        {cartTotal > 12000
        ? <p className='content_subTotal_p'>¡Envío gratis!</p>
        : <p className='content_subTotal_p'>Envío: $750</p>}
      </div>
      <div className='content_total'>
        {priceDiscount > 0 && priceDiscount < 12000 && <p>Total: ${(priceDiscount + 750).toLocaleString("ar")}</p>}
        {priceDiscount > 0 && priceDiscount > 12000 && <p>Total: ${(priceDiscount).toLocaleString("ar")}</p>}
        {cartTotal < 12000 && priceDiscount === 0 && <p>Total: ${(cartTotal + 750).toLocaleString("ar")}</p>}
        {cartTotal >= 12000 && priceDiscount === 0 && <p>Total: ${(cartTotal).toLocaleString("ar")}</p>}
      </div>
    </div>
  );
}

export default Content;