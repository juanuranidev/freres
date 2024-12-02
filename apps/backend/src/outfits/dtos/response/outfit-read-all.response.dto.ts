import { Outfit } from "outfits/entities/outfit.entity";
import { Product } from "products/entities/product.entity";

export class OutfitReadAllResponseDto {
    id: string;
    image_url: string;
    products: Product[];

    constructor(outfit: Outfit) {
        this.id = outfit.id;
        this.image_url = outfit.image_url;
        this.products = outfit.outfitProducts.map(op => op.product);
    }
} 