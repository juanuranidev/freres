import { PRODUCTS_CONSTANTS } from "@/lib/constants/products/products.constants";
import { Product } from "@/lib/interfaces/product/product.interfaces";

export const formatProductPriceLib = (price: number) => {
    const floatPrice: number = parseFloat(price.toString());

    const formattedPrice: string = `$${floatPrice.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;

    return formattedPrice;
};

export const calculateInstallmentsLib = (price: number, installments: number) => {
    switch (installments) {
        case PRODUCTS_CONSTANTS.INSTALLMENTS['6_WHITOUHT_INTEREST']:
            return `6 cuotas sin interés de ${formatProductPriceLib(price / 6)}`;
        case PRODUCTS_CONSTANTS.INSTALLMENTS['12_WHITOUHT_INTEREST']:
            return `12 cuotas sin interés de ${formatProductPriceLib(price / 12)}`;
        case PRODUCTS_CONSTANTS.INSTALLMENTS['18_WHITOUHT_INTEREST']:
            return `18 cuotas sin interés de ${formatProductPriceLib(price / 18)}`;
        case PRODUCTS_CONSTANTS.INSTALLMENTS['24_WHITOUHT_INTEREST']:
            return `24 cuotas sin interés de ${formatProductPriceLib(price / 24)}`;
    }
};

