import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductModel } from '../../../Context/CartContext';
import FreresLogo from '../../../../Assets/Logos/FreresLogo.jpg';
import './OutfitProducts.scss';

interface OutfitProductsProps {
    showItems: boolean;
    products: ProductModel[];
    loader: boolean;
    handleSetItem: (product: ProductModel) => void;
}

const OutfitProducts = ({showItems, products, loader, handleSetItem}: OutfitProductsProps) => {

    if(loader) {
        return (
        <div className='outfit_products_loading'>
            <img src={FreresLogo} className="outfit_products_loading_img" />
        </div>
        )
    }

    return (
    <div className='outfit_products'>
        <AnimatePresence>
            {showItems && ( 
                <motion.div
                    initial={{ opacity: 0, y: "-5%"}}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-5%" }}
                    transition={{ type: "linear" }}
                    className='outfit_products_div'
                >
                    {products.map((product: ProductModel) => 
                        <img
                            key={product.id}
                            src={product.images[0]}
                            className='outfit_products_div_img'
                            onClick={() => handleSetItem(product)}
                        />
                    )}                       
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default OutfitProducts