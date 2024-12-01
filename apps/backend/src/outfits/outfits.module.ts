import { Module } from '@nestjs/common';
import { Outfit } from './entities/outfit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutfitsService } from './services/outfits.service';
import { OutfitProducts } from './entities/outfit-products.entity';
import { OutfitsRepository } from './repositories/outfits.repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Outfit, OutfitProducts])],
  providers: [OutfitsService, OutfitsRepository],
  exports: [OutfitsService]
})
export class OutfitsModule { }
