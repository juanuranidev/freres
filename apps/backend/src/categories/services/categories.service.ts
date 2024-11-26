import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from 'categories/dto/create-category.dto';
import { CategoriesRepository } from 'categories/repositories/categories.repository';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(
    private readonly categoriesRepository: CategoriesRepository
  ) { }

  async createManyFromSeed(createCategoryDto: CreateCategoryDto[]) {
    try {
      return await this.categoriesRepository.createManyFromSeed(createCategoryDto);
    } catch (error) {
      this.logger.error(`Failed to create multiple categories: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple categories');
    }
  }

  async readByName(name: string) {
    try {
      return await this.categoriesRepository.readByName(name);
    } catch (error) {
      this.logger.error(`Failed to read category by name ${name}: ${error.message}`);
      throw new InternalServerErrorException(`Failed to read category by name ${name}`);
    }
  }

  async deleteAll() {
    try {
      return await this.categoriesRepository.deleteAll();
    } catch (error) {
      this.logger.error(`Failed to delete all categories: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete all categories');
    }
  }

}
