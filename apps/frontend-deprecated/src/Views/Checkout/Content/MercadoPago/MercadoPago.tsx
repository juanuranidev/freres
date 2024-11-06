import React from 'react';
import './MercadoPago.scss';

const MercadoPago = () => {
  return (
    <div className='mercadoPago'>
        <div className='cards'>
            <h3 className='cards_h3'>TARJETAS DE CRÉDITO</h3>
            <div className='cards_div'>
                <img className='cards_div_img' src="https://http2.mlstatic.com/storage/logos-api-admin/770edaa0-5dc7-11ec-a13d-73e40a9e9500-xl@2x.png" alt="Imágen de tarjeta"/>
                <img className='cards_div_img' src="https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif" alt="Imágen de tarjeta"/>
                <img className='cards_div_img' src="https://www.mercadopago.com/org-img/MP3/API/logos/cabal.gif" alt="Imágen de tarjeta"/>
                <img className='cards_div_img' src="https://http2.mlstatic.com/storage/logos-api-admin/33ea00e0-571a-11e8-8364-bff51f08d440-xl@2x.png" alt="Imágen de tarjeta"/>
                <img className='cards_div_img' src="https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-xl@2x.png" alt="Imágen de tarjeta"/>
                <img className='cards_div_img' src="https://http2.mlstatic.com/storage/logos-api-admin/d7e55980-f3be-11eb-8e0d-6f4af49bf82e-xl@2x.png" alt="Imágen de tarjeta"/>
                <img className='cards_div_img' src="https://www.mercadopago.com/org-img/MP3/API/logos/master.gif" alt="Imágen de tarjeta"/>
                <img className='cards_div_img' src="https://www.mercadopago.com/org-img/MP3/API/logos/amex.gif" alt="Imágen de tarjeta"/>
            </div>
        </div>
        <div className='cards2'>
            <div className='cards2_div'>
                <h3 className='cards2_div_h3'>TARJETAS DE DÉBITO</h3>
                <div className='cards2_div_images'>
                    <img className='cards2_div_images_img' src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-xl@2x.png" alt="Imágen de tarjeta"/>
                    <img className='cards2_div_images_img' src="https://http2.mlstatic.com/storage/logos-api-admin/d589be70-eb86-11e9-b9a8-097ac027487d-xl@2x.png" alt="Imágen de tarjeta"/>
                    <img className='cards2_div_images_img' src="https://http2.mlstatic.com/storage/logos-api-admin/0daa1670-5c81-11ec-ae75-df2bef173be2-xl@2x.png" alt="Imágen de tarjeta"/>
                    <img className='cards2_div_images_img cabal' src="https://http2.mlstatic.com/storage/logos-api-admin/c9f71470-6f07-11ec-9b23-071a218bbe35-xl@2x.png" alt="Imágen de tarjeta"/>
                </div>
            </div>
            <div className='cards2_div'>
                <h3 className='cards2_div_h3'>PAGOS EN EFECTIVO</h3>
                <div className='cards2_div_images'>
                    <img className='cards2_div_images_img' src="https://www.mercadopago.com/org-img/MP3/API/logos/pagofacil.gif" alt="Imágen de tarjeta"/>
                    <img className='cards2_div_images_img' src="https://www.mercadopago.com/org-img/MP3/API/logos/rapipago.gif" alt="Imágen de tarjeta"/>
                </div>
            </div>
        </div>
        <div className='payment'>
            <img className='payment_img' src="https://freres.ar/wp-content/plugins/woocommerce-mercadopago/assets/images/redirect_checkout.png" alt="Imágen de tarjeta"/>
            <h3 className='payment_h3'>TE LLEVAMOS A NUESTRO SITIO PARA REALIZAR EL PAGO</h3>
        </div>
    </div>
  );
}

export default MercadoPago;