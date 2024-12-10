import { Product } from 'products/entities/product.entity';
import { ProductCreateManyFromSeedDto } from '../dtos/create/create-many-from-seed/products.create-many-from-seed.dto';
import { ProductsRepository } from 'products/repositories/product.repository';
import { ProductReadAllCriteriaDto } from 'products/dtos/read/read-all/products.read-all-criteria.dto';
import { ProductReadAllResponseDto } from 'products/dtos/read/read-all/products.read-all-response.dto';
import { ProductReadByIdResponseDto } from 'products/dtos/read/read-by-id/products.read-by-id-response.dto';
import { productsReadAllServiceMapper } from 'products/mappers/read/products.read-all-service.mapper';
import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(
    private readonly productRepository: ProductsRepository
  ) { }

  async createManyFromSeed(createProductDtos: ProductCreateManyFromSeedDto[]): Promise<void> {
    try {
      await this.productRepository.createManyFromSeed(createProductDtos);
    } catch (error) {
      this.logger.error(`Failed to create multiple products: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple products');
    }
  }

  async readAll(productReadAllCriteriaDto: ProductReadAllCriteriaDto): Promise<ProductReadAllResponseDto[]> {
    try {
      const products: Product[] = await this.productRepository.readAll(productReadAllCriteriaDto);

      return productsReadAllServiceMapper(products);
    } catch (error) {
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
