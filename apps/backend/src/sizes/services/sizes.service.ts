import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSizeDto } from '../dto/create-size.dto';
import { SizesRepository } from 'sizes/repositories/sizes.repository';

@Injectable()
export class SizesService {
  constructor(
    private readonly sizesRepository: SizesRepository
  ) { }

  async readByName(name: string) {
    try {
      return await this.sizesRepository.readByName(name);
    } catch (error) {
      throw new InternalServerErrorException('Error reading size by name');
    }
  }

  async createManyFromSeed(createSizeDto: CreateSizeDto[]) {
    try {
      return await this.sizesRepository.createManyFromSeed(createSizeDto);
    } catch (error) {
      throw new InternalServerErrorException('Error creating sizes');
    }
  }

  async deleteAll() {
    try {
      return await this.sizesRepository.deleteAll();
    } catch (error) {
      throw new InternalServerErrorException('Error deleting sizes');
    }
  }

}
