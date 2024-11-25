import { Category } from "categories/entities/category.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryDto } from "categories/dto/create-category.dto";
import { DataSource, Repository } from "typeorm";



@Injectable()
export class CategoriesRepository {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) { }

    async createManyFromSeed(createCategoryDto: CreateCategoryDto[]) {
        return await this.categoryRepository.insert(createCategoryDto);
    }

    async readByName(name: string) {
        return await this.categoryRepository.findOne({ where: { name } });
    }

    async deleteAll() {
        return await this.categoryRepository.delete({});
    }

}
