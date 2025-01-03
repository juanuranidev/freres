import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesRepository } from './repositories/categories.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ProductCategory } from '../products/entities/product-category.entity';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category, ProductCategory])],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
  exports: [CategoriesService]
})

export class CategoriesModule { }
