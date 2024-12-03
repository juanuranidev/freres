import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';
import { ProductSize } from './entities/product-size.entity';
import { ProductCategory } from './entities/product-category.entity';
import { ProductsRepository } from './repositories/product.repository';
import { ProductsService } from './services/products.service';
import { Size } from '../sizes/entities/size.entity';
import { Category } from '../categories/entities/category.entity';
import { ProductsController } from './controllers/products.controller';

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
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
  exports: [ProductsService]
})
export class ProductsModule { }
