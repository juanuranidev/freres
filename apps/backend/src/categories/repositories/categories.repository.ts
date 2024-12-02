import { Category } from "categories/entities/category.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryDto } from "categories/dto/create-category.dto";
import { Repository } from "typeorm";

@Injectable()
export class CategoriesRepository {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    async createManyFromSeed(createCategoryDto: CreateCategoryDto[]): Promise<void> {
        await this.categoryRepository.insert(createCategoryDto);
    }

    async readByName(name: string): Promise<Category | null> {
        return await this.categoryRepository.findOne({ where: { name } });
    }

    async readAll(): Promise<Category[]> {
        return await this.categoryRepository.find({
            select: {
                name: true
            }
        });
    }

}
