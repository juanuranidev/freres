import { Module } from '@nestjs/common';
import { StatesService } from './services/states.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesRepository } from './repositories/states.repository';
import { State } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  providers: [StatesService, StatesRepository],
  exports: [StatesService],
})
export class StatesModule { }
