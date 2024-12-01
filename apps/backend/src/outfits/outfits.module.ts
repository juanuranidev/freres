import { Module } from '@nestjs/common';
import { Outfit } from './entities/outfit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutfitsService } from './services/outfits.service';
import { OutfitProduct } from './entities/outfit-product.entity';
import { OutfitsRepository } from './repositories/outfits.repositories';
import { Product } from 'products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Outfit, OutfitProduct, Product])],
  providers: [OutfitsService, OutfitsRepository],
  exports: [OutfitsService]
})
export class OutfitsModule { }
