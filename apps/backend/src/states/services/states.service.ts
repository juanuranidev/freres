import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateStateDto } from '../dto/create-state.dto';
import { StatesRepository } from '../repositories/states.repository';

@Injectable()
export class StatesService {
  private readonly logger = new Logger(StatesService.name);

  constructor(
    private readonly statesRepository: StatesRepository,
  ) { }

  async createManyFromSeed(createStateDto: CreateStateDto[]) {
    try {
      return await this.statesRepository.createManyFromSeed(createStateDto);
    } catch (error) {
      this.logger.error(`Failed to create multiple states: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple states');
    }
  }

  async deleteAll() {
    try {
      return await this.statesRepository.deleteAll();
    } catch (error) {
      this.logger.error(`Failed to delete all states: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete all states');
    }
  }
}
