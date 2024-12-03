import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateProductDto } from '../dtos/post/create-product.dto';
import { ProductsRepository } from 'products/repositories/product.repository';
import { Product } from 'products/entities/product.entity';
import { CriteriaProductDto } from 'products/dtos/get/criteria-product.dto';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(
    private readonly productRepository: ProductsRepository
  ) { }

  async createManyFromSeed(createProductDtos: CreateProductDto[]): Promise<void> {
    try {
      await this.productRepository.createManyFromSeed(createProductDtos);
    } catch (error) {
      this.logger.error(`Failed to create multiple products: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple products');
    }
  }

  async readAll(criteria: CriteriaProductDto): Promise<Product[]> {
    try {
      return await this.productRepository.readAll(criteria);
    } catch (error) {
      this.logger.error(`Failed to read all products: ${error.message}`);
      throw new InternalServerErrorException('Failed to read all products');
    }
  }

  async readById(id: string): Promise<Product> {
    try {
      return await this.productRepository.readById(id);
    } catch (error) {
      this.logger.error(`Failed to read product by id: ${error.message}`);
      throw new InternalServerErrorException('Failed to read product by id');
    }
  }
}
