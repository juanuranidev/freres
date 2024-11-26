import { Module } from '@nestjs/common';
import { SeedService } from './services/seed.service';
import { CategoriesModule } from '../../../categories/categories.module';
import { SeedController } from './controllers/seed.controller';
import { SeedRepository } from './repository/seed.repository';
import { SizesModule } from 'sizes/sizes.module';
import { ProductsModule } from 'products/products.module';

@Module({
  imports: [CategoriesModule, SizesModule, ProductsModule],
  controllers: [SeedController],
  providers: [SeedService, SeedRepository],
  exports: [SeedService]
})
export class SeedModule { }
