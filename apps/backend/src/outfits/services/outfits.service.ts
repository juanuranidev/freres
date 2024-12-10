import { OutfitReadAllResponseDto } from 'outfits/dtos/read/read-all/outfits.read-all-response.dto';
import { OutfitCreateManyFromSeedDto } from '../dtos/create/outfits.create-many-from-seed.dto';
import { OutfitsRepository } from '../repositories/outfits.repositories';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { outfitReadAllServiceMapper } from 'outfits/mappers/read/outfits.read-all-service.mapper';

@Injectable()
export class OutfitsService {
  private readonly logger = new Logger(OutfitsService.name);
  constructor(
    private readonly outfitsRepository: OutfitsRepository
  ) { }

  async createManyFromSeed(createOutfitDto: OutfitCreateManyFromSeedDto[]) {
    try {
      await this.outfitsRepository.createManyFromSeed(createOutfitDto);
    } catch (error) {
      this.logger.error(`Failed to create multiple outfits: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple outfits');
    }
  }

  async readAll(): Promise<OutfitReadAllResponseDto[]> {
    try {
      const outfits = await this.outfitsRepository.readAll();

      return outfitReadAllServiceMapper(outfits);
    } catch (error) {
      this.logger.error(`Failed to find all outfits: ${error.message}`);
      throw new InternalServerErrorException('Failed to find all outfits');
    }
  }
}
