import { AxiosResponse } from 'axios';
import request from "@/services/request";
import { Product } from '@/lib/interfaces/product/product.interfaces';

interface ProductReadAllCriteriaDto {
    limit?: number;
    offset?: number;
    category?: string;
    size?: string;
    title?: string;
}

export interface ReadAllProductsResponse {
    data: Product[];
    total: number;
    offset: number;
    limit: number;
}

export const readAllProductsService = async ({
    limit,
    offset,
    category,
    size,
    title
}: ProductReadAllCriteriaDto): Promise<ReadAllProductsResponse> => {
    try {
        const response: AxiosResponse = await request({
            method: 'GET',
            url: '/products',
            params: {
                limit,
                offset,
                category,
                size,
                title
            }
        })
        return response.data
    } catch (error) {
        console.error(error);
        throw error as Error
    }
}

export const readProductBySlugService = async (slug: string): Promise<Product> => {
    const response: AxiosResponse = await request({
        method: 'GET',
        url: `/products/${slug}`
    })

    return response.data
}

