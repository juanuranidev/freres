import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "products/dtos/create-product.dto";
import { Product } from "products/entities/product.entity";
import { ProductImage } from "products/entities/product-images.entity";
import { ProductSize } from "products/entities/product-sizes.entity";
import { ProductCategory } from "products/entities/product-categories.entity";
import { Size } from "sizes/entities/sizes.entity";
import { Category } from "categories/entities/category.entity";
import { Repository, DataSource, In, QueryRunner } from "typeorm";

@Injectable()
export class ProductsRepository {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(ProductImage)
        private readonly productImageRepository: Repository<ProductImage>,
        @InjectRepository(ProductSize)
        private readonly productSizeRepository: Repository<ProductSize>,
        @InjectRepository(ProductCategory)
        private readonly productCategoryRepository: Repository<ProductCategory>,
        @InjectRepository(Size)
        private readonly sizeRepository: Repository<Size>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
        private readonly dataSource: DataSource
    ) { }

    async createManyFromSeed(products: CreateProductDto[]) {
        const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            for (const productData of products) {
                const product: Product = this.productRepository.create({
                    title: productData.title,
                    price: productData.price,
                    description: productData.description,
                    discount: productData.discount,
                });

                const savedProduct: Product = await this.productRepository.save(product);

                const productImages: ProductImage[] = productData.images.map((image: ProductImage) =>
                    this.productImageRepository.create({
                        url: image.url,
                        product: savedProduct
                    })
                );

                await this.productImageRepository.save(productImages);

                const sizeNames: string[] = productData.sizes.map((size: Size) => size.name);
                const sizes: Size[] = await this.sizeRepository.find({
                    where: { name: In(sizeNames) }
                });

                const productSizes: ProductSize[] = sizes.map((size: Size) =>
                    this.productSizeRepository.create({
                        product: savedProduct,
                        size: size,
                        stock: 120
                    })
                );

                await this.productSizeRepository.save(productSizes);

                const categoryNames: string[] = productData.categories.map((category: Category) => category.name);
                const categories: Category[] = await this.categoryRepository.find({
                    where: { name: In(categoryNames) }
                });

                const productCategories: ProductCategory[] = categories.map((category: Category) =>
                    this.productCategoryRepository.create({
                        product: savedProduct,
                        category: category
                    })
                );

                await this.productCategoryRepository.save(productCategories);
            }

            await queryRunner.commitTransaction();
            return true;
        } catch (error) {
            console.error('Error in createMany:', error);
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async deleteAll() {
        const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            await this.productImageRepository.delete({});
            await this.productSizeRepository.delete({});
            await this.productCategoryRepository.delete({});
            await this.productRepository.delete({});

            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }
}