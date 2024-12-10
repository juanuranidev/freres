import { Outfit } from "outfits/entities/outfit.entity";
import { OutfitReadAllResponseDto } from "outfits/dtos/read/read-all/outfits.read-all-response.dto";

export const outfitReadAllServiceMapper = (outfits: Outfit[]): OutfitReadAllResponseDto[] => {
    return outfits.map((outfit: Outfit) => ({
        id: outfit.id,
        image_url: outfit.image_url,
        products: outfit.outfits.map(op => ({
            title: op.product.title,
            price: op.product.price,
            slug: op.product.slug,
            image_urls: op.product.images?.map(image => image.url) || []
        }))
    }));
}