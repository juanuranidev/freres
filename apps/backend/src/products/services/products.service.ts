import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductsRepository } from 'products/repositories/product.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productRepository: ProductsRepository
  ) { }

  async createManyFromSeed(createProductDtos: CreateProductDto[]) {
    try {
      return await this.productRepository.createManyFromSeed(createProductDtos);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteAll() {
    try {
      return await this.productRepository.deleteAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

}
