import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateOutfitDto } from '../dto/create-outfit.dto';
import { OutfitsRepository } from '../repositories/outfits.repositories';

@Injectable()
export class OutfitsService {
  private readonly logger = new Logger(OutfitsService.name);

  constructor(
    private readonly outfitsRepository: OutfitsRepository
  ) { }

  async createManyFromSeed(createOutfitDto: CreateOutfitDto[]) {
    try {
      await this.outfitsRepository.createManyFromSeed(createOutfitDto);
    } catch (error) {
      this.logger.error(`Failed to create multiple outfits: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple outfits');
    }
  }

}
