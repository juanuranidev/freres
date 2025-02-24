import { Product } from 'products/entities/product.entity';
import { ProductCreateManyFromSeedDto } from '../dtos/create/create-many-from-seed/products.create-many-from-seed.dto';
import { ProductsRepository } from 'products/repositories/product.repository';
import { ProductReadAllCriteriaDto } from 'products/dtos/read/read-all/products.read-all-criteria.dto';
import { ProductReadBySlugResponseDto } from 'products/dtos/read/read-by-id/products.read-by-id-response.dto';
import { productsReadAllServiceMapper } from 'products/mappers/read/products.read-all-service.mapper';
import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { PaginatedProductsResponseDto } from 'products/dtos/read/read-all/paginated-products-response.dto';

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

  async readAll(productReadAllCriteriaDto: ProductReadAllCriteriaDto): Promise<PaginatedProductsResponseDto> {
    try {
      const [products, total] = await this.productRepository.readAll(productReadAllCriteriaDto);
      const { limit = 10, offset = 0 } = productReadAllCriteriaDto;

      const currentPage = Math.floor(offset / limit) + 1;
      const totalPages = Math.ceil(total / limit);

      return {
        data: productsReadAllServiceMapper(products),
        pagination: {
          total,
          offset,
          limit,
          currentPage,
          totalPages,
          hasNextPage: currentPage < totalPages,
          hasPrevPage: currentPage > 1
        }
      };
    } catch (error) {
      this.logger.error(`Failed to read all products: ${error.message}`);
      throw new InternalServerErrorException(`Failed to read all products: ${error.message}`);
    }
  }

  async readBySlug(slug: string): Promise<ProductReadBySlugResponseDto> {
    try {
      const product: Product = await this.productRepository.readBySlug(slug);

      if (!product) {
        throw new NotFoundException(`Product with slug ${slug} not found`);
      }

      return productsReadAllServiceMapper([product])[0];
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(`Failed to read product by slug: ${error.message}`);
      throw new InternalServerErrorException('Failed to read product by slug');
    }
  }
}
