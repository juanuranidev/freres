import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOutfitDto } from "../dto/create-outfit.dto";
import { Outfit } from "../entities/outfit.entity";
import { DataSource, QueryRunner, Repository } from "typeorm";
import { Product } from "../../products/entities/product.entity";
import { OutfitProduct } from "../entities/outfit-product.entity";

@Injectable()
export class OutfitsRepository {
    constructor(
        @InjectRepository(Outfit)
        private readonly outfitRepository: Repository<Outfit>,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(OutfitProduct)
        private readonly outfitProductsRepository: Repository<OutfitProduct>,
        private readonly dataSource: DataSource
    ) { }

    async createManyFromSeed(createOutfitDto: CreateOutfitDto[]) {
        const queryRunner: QueryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            for (const outfitDto of createOutfitDto) {
                const outfit = this.outfitRepository.create({
                    image_url: outfitDto.image_url
                });
                await queryRunner.manager.save(outfit);

                for (const productName of outfitDto.products) {
                    const product = await this.productRepository.findOne({
                        where: {
                            title: productName
                        }
                    })

                    const outfitProduct = this.outfitProductsRepository.create({
                        product: product,
                        outfit: outfit
                    })

                    await queryRunner.manager.save(outfitProduct);
                }
            }
            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

}
