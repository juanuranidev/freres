import { Product } from 'products/entities/product.entity';
import { CreateProductDto } from '../dtos/create/create-many-from-seed/products.create-many-from-seed.dto';
import { ProductsRepository } from 'products/repositories/product.repository';
import { ProductReadAllCriteriaDto } from 'products/dtos/read/read-all/products.read-all-criteria.dto';
import { ProductsReadAllResponseDto } from 'products/dtos/read/read-all/products.read-all-response.dto';
import { ProductReadByIdResponseDto } from 'products/dtos/read/read-by-id/products.read-by-id-response.dto';
import { productsReadAllServiceMapper } from 'products/mappers/read/products.read-all-service.mapper';
import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';

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

  async readAll(criteria: ProductReadAllCriteriaDto): Promise<ProductsReadAllResponseDto[]> {
    try {
      const products: Product[] = await this.productRepository.readAll(criteria);

      if (!products.length) {
        throw new NotFoundException('No products found matching the criteria');
      }

      return productsReadAllServiceMapper(products);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(`Failed to read all products: ${error.message}`);
      throw new InternalServerErrorException(`Failed to read all products: ${error.message}`);
    }
  }

  async readById(id: string): Promise<ProductReadByIdResponseDto> {
    try {
      const product: Product = await this.productRepository.readById(id);

      if (!product) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }

      return productsReadAllServiceMapper([product])[0];
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(`Failed to read product by id: ${error.message}`);
      throw new InternalServerErrorException('Failed to read product by id');
    }
  }
}
