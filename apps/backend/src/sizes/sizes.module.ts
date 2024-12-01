import { Size } from './entities/size.entity';
import { Module } from '@nestjs/common';
import { SizesService } from './services/sizes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizesRepository } from './repositories/sizes.repository';
import { ProductSize } from '../products/entities/product-size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Size, ProductSize])],
  providers: [SizesService, SizesRepository],
  exports: [SizesService]
})
export class SizesModule { }
