export interface OutfitI {
    id: string;
    imageUrl: string;
    products: OutfitProductI[];
}

export interface OutfitProductI {
    id: string;
    title: string;
    price: number;
    slug: string;
    imageUrls: string[];
}
