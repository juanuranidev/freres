import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "products/dtos/post/create-product.dto";
import { Product } from "products/entities/product.entity";
import { ProductImage } from "products/entities/product-image.entity";
import { ProductSize } from "products/entities/product-size.entity";
import { ProductCategory } from "products/entities/product-category.entity";
import { Category } from "categories/entities/category.entity";
import { Repository, DataSource, In, QueryRunner, SelectQueryBuilder } from "typeorm";
import { Size } from "sizes/entities/size.entity";
import { CriteriaProductDto } from "products/dtos/get/criteria-product.dto";

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

    async createManyFromSeed(products: CreateProductDto[]): Promise<void> {
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
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw new InternalServerErrorException(error);
        } finally {
            await queryRunner.release();
        }
    }

    async readAll(criteria: CriteriaProductDto): Promise<Product[]> {
        const { limit, offset, category, size } = criteria;

        const query: SelectQueryBuilder<Product> = this.productRepository.createQueryBuilder("product")
            .leftJoinAndSelect("product.images", "images")
            .leftJoinAndSelect("product.productCategories", "productCategories")
            .leftJoinAndSelect("productCategories.category", "category");

        if (category) {
            query.andWhere("productCategories.category_id = :category", { category });
        }

        if (size) {
            query.leftJoin("product.productSizes", "productSize");
            query.andWhere("productSize.size_id = :size", { size });
        }

        if (limit) {
            query.take(limit);
        }

        if (offset) {
            query.skip(offset);
        }

        return await query.getMany();
    }

    async readById(id: string): Promise<Product> {
        return await this.productRepository.findOne({
            where: { id },
            relations: ["images", "productCategories.category"],
        });
    }

}