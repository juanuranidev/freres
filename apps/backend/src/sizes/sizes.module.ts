import { Size } from './entities/sizes.entity';
import { Module } from '@nestjs/common';
import { SizesService } from './services/sizes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizesRepository } from './repositories/sizes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Size])],
  providers: [SizesService, SizesRepository],
  exports: [SizesService]
})
export class SizesModule { }
