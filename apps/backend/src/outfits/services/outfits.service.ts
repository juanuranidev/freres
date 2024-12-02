import { Outfit } from 'outfits/entities/outfit.entity';
import { CreateOutfitDto } from '../dtos/post/create-outfit.dto';
import { OutfitsRepository } from '../repositories/outfits.repositories';
import { OutfitReadAllResponseDto } from 'outfits/dtos/response/outfit-read-all.response.dto';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';

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

  async readAll(): Promise<OutfitReadAllResponseDto[]> {
    try {
      const outfits = await this.outfitsRepository.readAll();
      return outfits.map((outfit: Outfit) => new OutfitReadAllResponseDto(outfit));
    } catch (error) {
      this.logger.error(`Failed to find all outfits: ${error.message}`);
      throw new InternalServerErrorException('Failed to find all outfits');
    }
  }
}
