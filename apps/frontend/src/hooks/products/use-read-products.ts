import { Product } from "@/lib/interfaces/product/product.interfaces";
import { PRODUCTS_CONSTANTS } from "@/lib/constants/products/products.constants";
import { useEffect, useState } from "react";
import { readAllProductsService } from "@/services/product/product.services";

interface UseReadProductsProps {
    category?: string;
    size?: string;
    title?: string;
    limit?: number;
}

interface UseReadProductsReturn {
    products: Product[] | [];
    isLoading: boolean;
    handleRefetchProducts: () => Promise<void>;
    handleIncrementLimit: () => Promise<void>;
    hasMoreProducts: boolean;
}

interface Pagination {
    total: number;
    offset: number;
    limit: number;
}

export const useReadProducts = ({
    category,
    size,
    title,
    limit,
}: UseReadProductsProps): UseReadProductsReturn => {
    const [products, setProducts] = useState<Product[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasMoreProducts, setHasMoreProducts] = useState<boolean>(true);
    const [pagination, setPagination] = useState<Pagination>({
        total: 0,
        offset: 0,
        limit: limit || PRODUCTS_CONSTANTS.DEFAULT_LIMIT
    });

    const handleReadProducts = async (isLoadingMore: boolean = false): Promise<void> => {
        setIsLoading(true);
        try {
            const response: any = await readAllProductsService({
                title,
                limit: pagination.limit,
                offset: isLoadingMore ? pagination.offset + pagination.limit : 0,
                category,
                size
            });

            setProducts(prevProducts =>
                isLoadingMore ? [...prevProducts, ...response.data] : response.data
            );

            setPagination(response.pagination);
            setHasMoreProducts(
                response.pagination.total >
                response.pagination.offset + response.pagination.limit
            );
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }

    const handleRefetchProducts = async (): Promise<void> => {
        setPagination(prev => ({ ...prev, offset: 0, limit: PRODUCTS_CONSTANTS.DEFAULT_LIMIT }));
        await handleReadProducts();
    }

    const handleIncrementLimit = async (): Promise<void> => {
        if (!hasMoreProducts || isLoading) return;

        setPagination(prev => ({
            ...prev,
            limit: PRODUCTS_CONSTANTS.INCREMENT_AMOUNT_LIMIT
        }));

        await handleReadProducts(true);
    }

    useEffect(() => {
        handleRefetchProducts();
    }, [title, category, size]);

    return { products, isLoading, handleRefetchProducts, handleIncrementLimit, hasMoreProducts };
}