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

export const readAllProductsService = async ({
    limit,
    offset,
    category,
    size,
    title
}: ProductReadAllCriteriaDto): Promise<Product[]> => {
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

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const readProductByIdService = async (id: string): Promise<Product> => {
    await delay(2000);
    const response: AxiosResponse = await request({
        method: 'GET',
        url: `/products/${id}`
    })

    return response.data
}
