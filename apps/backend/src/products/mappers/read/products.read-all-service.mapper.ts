import { Product } from 'products/entities/product.entity';
import { ProductSize } from 'products/entities/product-size.entity';
import { ProductImage } from 'products/entities/product-image.entity';
import { ProductCategory } from 'products/entities/product-category.entity';
import { ProductsReadAllResponseDto } from 'products/dtos/read/read-all/products.read-all-response.dto';

export const productsReadAllServiceMapper = (products: Product[]): ProductsReadAllResponseDto[] => {
    return products.map((product: Product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
        discount: product.discount,
        slug: product.slug,
        description: product.description,
        images: product.images?.map((image: ProductImage) => image.url) || [],
        categories: product.categories?.map((productCategory: ProductCategory) =>
            productCategory.category?.name
        ).filter(Boolean) || [],
        sizes: product.sizes?.map((productSize: ProductSize) => ({
            stock: productSize.stock,
            name: productSize.size?.name
        })).filter(Boolean) || [],
    }));
}
