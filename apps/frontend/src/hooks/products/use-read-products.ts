import { Product } from "@/lib/interfaces/product/product.interfaces";
import { PRODUCTS_CONSTANTS } from "@/lib/constants/products/products.constants";
import { useEffect, useState } from "react";
import { readAllProductsService } from "@/services/product/product.services";

interface UseReadProductsProps {
    category?: string;
    size?: string;
    title?: string;
}

interface UseReadProductsReturn {
    products: Product[] | [];
    isLoading: boolean;
    handleRefetchProducts: () => Promise<void>;
    handleIncrementLimit: () => Promise<void>;
    hasMore: boolean;
}

export const useReadProducts = ({
    category,
    size,
    title
}: UseReadProductsProps): UseReadProductsReturn => {
    const [products, setProducts] = useState<Product[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const handleReadProducts = async (limit?: number): Promise<void> => {
        setIsLoading(true);
        try {
            const response: Product[] = await readAllProductsService({
                title,
                limit: limit || PRODUCTS_CONSTANTS.DEFAULT_LIMIT,
                category,
                size
            });
            setHasMore(response.length >= (limit || PRODUCTS_CONSTANTS.DEFAULT_LIMIT));
            setProducts(response);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }

    const handleRefetchProducts = async (): Promise<void> => {
        await handleReadProducts();
    }

    const handleIncrementLimit = async (): Promise<void> => {
        if (!hasMore || isLoading) return;
        const newLimit: number = PRODUCTS_CONSTANTS.DEFAULT_LIMIT + PRODUCTS_CONSTANTS.INCREMENT_AMOUNT_LIMIT;

        await handleReadProducts(newLimit);
    }

    useEffect(() => {
        handleReadProducts();
    }, [title]);

    return { products, isLoading, handleRefetchProducts, handleIncrementLimit, hasMore };
}