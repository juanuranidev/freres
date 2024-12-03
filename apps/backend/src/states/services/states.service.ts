import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateStateDto } from '../dto/post/create-state.dto';
import { StatesRepository } from '../repositories/states.repository';
import { State } from 'states/entities/state.entity';

@Injectable()
export class StatesService {
  private readonly logger = new Logger(StatesService.name);

  constructor(
    private readonly statesRepository: StatesRepository,
  ) { }

  async createManyFromSeed(createStateDto: CreateStateDto[]): Promise<void> {
    try {
      await this.statesRepository.createManyFromSeed(createStateDto);
    } catch (error) {
      this.logger.error(`Failed to create multiple states: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple states');
    }
  }

  async readAll(): Promise<State[]> {
    try {
      return await this.statesRepository.readAll();
    } catch (error) {
      this.logger.error(`Failed to read all states: ${error.message}`);
      throw new InternalServerErrorException('Failed to read all states');
    }
  }

}
