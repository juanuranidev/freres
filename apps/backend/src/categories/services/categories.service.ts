import { Category } from 'categories/entities/category.entity';
import { CategoriesRepository } from 'categories/repositories/categories.repository';
import { Injectable, Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CategoryCreateManyFromSeedDto } from 'categories/dto/create/categories.create-many-from-seed.dto';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(
    private readonly categoriesRepository: CategoriesRepository
  ) { }

  async createManyFromSeed(createCategoryDto: CategoryCreateManyFromSeedDto[]): Promise<void> {
    try {
      return await this.categoriesRepository.createManyFromSeed(createCategoryDto);
    } catch (error) {
      this.logger.error(`Failed to create multiple categories: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple categories');
    }
  }

  async readByName(name: string): Promise<Category | null> {
    try {
      return await this.categoriesRepository.readByName(name);
    } catch (error) {
      this.logger.error(`Failed to read category by name ${name}: ${error.message}`);
      throw new InternalServerErrorException(`Failed to read category by name ${name}`);
    }
  }

  async readAll(): Promise<Category[]> {
    try {
      return await this.categoriesRepository.readAll();
    } catch (error) {
      this.logger.error(`Failed to read all categories: ${error.message}`);
      throw new InternalServerErrorException('Failed to read all categories');
    }
  }

}
