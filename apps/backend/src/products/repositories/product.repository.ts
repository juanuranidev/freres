import { Size } from "sizes/entities/size.entity";
import { Product } from "products/entities/product.entity";
import { Category } from "categories/entities/category.entity";
import { ProductSize } from "products/entities/product-size.entity";
import { ProductImage } from "products/entities/product-image.entity";
import { ProductCategory } from "products/entities/product-category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductReadAllCriteriaDto } from "products/dtos/read/read-all/products.read-all-criteria.dto";
import { ProductCreateManyFromSeedDto } from "products/dtos/create/create-many-from-seed/products.create-many-from-seed.dto";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository, DataSource, In, QueryRunner, SelectQueryBuilder } from "typeorm";

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

    async createManyFromSeed(products: ProductCreateManyFromSeedDto[]): Promise<void> {
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

    async readAll(productReadAllCriteriaDto: ProductReadAllCriteriaDto): Promise<[Product[], number]> {
        const { limit, offset, category, size, title } = productReadAllCriteriaDto;

        const query: SelectQueryBuilder<Product> = this.productRepository.createQueryBuilder("product")
            .leftJoinAndSelect("product.images", "images")
            .leftJoinAndSelect("product.categories", "categories")
            .leftJoinAndSelect("categories.category", "category")
            .leftJoinAndSelect("product.sizes", "sizes")
            .leftJoinAndSelect("sizes.size", "size")
            .select([
                'product.id',
                'product.title',
                'product.price',
                'product.description',
                'product.discount',
                'product.slug',
                'product.createdAt',
                'product.updatedAt',
                'images.id',
                'images.url',
                'categories.id',
                'category.name',
                'sizes.stock',
                'size.name',
                'size.id',
                'sizes.id'
            ])
            .distinct(true);

        if (category) {
            query.andWhere("category.name = :category", { category });
            console.log(query.getQueryAndParameters());
        }

        if (size) {
            query.andWhere("size.name = :size", { size });
        }

        if (title) {
            query.andWhere("product.title ILIKE :title", { title: `%${title}%` });
        }

        query.orderBy('product.createdAt', 'DESC');

        if (offset) {
            query.skip(offset);
        }

        if (limit) {
            query.take(limit);
        }

        return await query.getManyAndCount();
    }

    async readBySlug(slug: string): Promise<Product> {
        return await this.productRepository.findOne({
            where: { slug },
            relations: ["images", "categories.category", "sizes", "sizes.size"],
        });
    }

}