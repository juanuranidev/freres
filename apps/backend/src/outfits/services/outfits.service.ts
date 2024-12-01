import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateOutfitDto } from '../dto/create-outfit.dto';
import { OutfitsRepository } from '../repositories/outfits.repositories';

@Injectable()
export class OutfitsService {
  constructor(
    private readonly outfitsRepository: OutfitsRepository
  ) { }

  async createManyFromSeed(createOutfitDto: CreateOutfitDto[]) {
    try {
      return await this.outfitsRepository.createManyFromSeed(createOutfitDto);
    } catch (error) {
      throw new InternalServerErrorException('Error creating outfits');
    }
  }

  async deleteAll() {
    try {
      return await this.outfitsRepository.deleteAll();
    } catch (error) {
      throw new InternalServerErrorException('Error deleting outfits');
    }
  }

}
