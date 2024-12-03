import { Module } from '@nestjs/common';
import { SeedService } from './services/seed.service';
import { CategoriesModule } from '../../../categories/categories.module';
import { SeedController } from './controllers/seed.controller';
import { SizesModule } from 'sizes/sizes.module';
import { ProductsModule } from 'products/products.module';
import { StatesModule } from 'states/states.module';
import { OutfitsModule } from 'outfits/outfits.module';
@Module({
  imports: [CategoriesModule, SizesModule, ProductsModule, StatesModule, OutfitsModule],
  controllers: [SeedController],
  providers: [SeedService],
  exports: [SeedService]
})
export class SeedModule { }
