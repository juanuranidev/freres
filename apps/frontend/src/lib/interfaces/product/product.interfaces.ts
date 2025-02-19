export interface Product {
    id: string;
    title: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    discount: number;
    slug: string;
    description: string;
    images: string[];
    sizes: ProductSize[];
    categories: string[];
    quantity?: number;
    size?: ProductSize;
}

export interface ProductSize {
    stock: number;
    name: string;
    id: string;
}
