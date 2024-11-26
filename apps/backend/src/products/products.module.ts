import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-images.entity';
import { ProductSize } from './entities/product-sizes.entity';
import { ProductCategory } from './entities/product-categories.entity';
import { ProductsRepository } from './repositories/product.repository';
import { ProductsService } from './services/products.service';
import { Size } from '../sizes/entities/sizes.entity';
import { Category } from '../categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductImage,
      ProductSize,
      ProductCategory,
      Size,
      Category
    ])
  ],
  providers: [ProductsService, ProductsRepository],
  exports: [ProductsService]
})
export class ProductsModule { }
