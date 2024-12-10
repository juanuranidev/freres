import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { SizesRepository } from '../repositories/sizes.repository';
import { Size } from '../entities/size.entity';
import { SizeCreateManyFromSeedDto } from 'sizes/dto/create/sizes.create-many-from-seed.dto';

@Injectable()
export class SizesService {
  private readonly logger = new Logger(SizesService.name);

  constructor(
    private readonly sizesRepository: SizesRepository
  ) { }

  async readByName(name: string): Promise<Size | null> {
    try {
      return await this.sizesRepository.readByName(name);
    } catch (error) {
      this.logger.error(`Failed to read size by name: ${error.message}`);
      throw new InternalServerErrorException('Failed to read size by name');
    }
  }

  async createManyFromSeed(createSizeDto: SizeCreateManyFromSeedDto[]): Promise<void> {
    try {
      await this.sizesRepository.createManyFromSeed(createSizeDto);
    } catch (error) {
      this.logger.error(`Failed to create multiple sizes: ${error.message}`);
      throw new InternalServerErrorException('Failed to create multiple sizes');
    }
  }

}
