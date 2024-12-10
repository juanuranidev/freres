import { Size } from '../entities/size.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SizeCreateManyFromSeedDto } from 'sizes/dto/create/sizes.create-many-from-seed.dto';

@Injectable()
export class SizesRepository {
  constructor(
    @InjectRepository(Size)
    private readonly sizeRepository: Repository<Size>,
  ) { }

  async createManyFromSeed(createSizeDto: SizeCreateManyFromSeedDto[]): Promise<void> {
    await this.sizeRepository.insert(createSizeDto);
  }

  async readByName(name: string): Promise<Size | null> {
    return await this.sizeRepository.findOne({ where: { name } });
  }

}
