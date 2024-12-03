import { Module } from '@nestjs/common';
import { StatesService } from './services/states.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesRepository } from './repositories/states.repository';
import { State } from './entities/state.entity';
import { StatesController } from './controllers/states.controller';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StatesController],
  providers: [StatesService, StatesRepository],
  exports: [StatesService],
})
export class StatesModule { }
