import { Injectable } from '@nestjs/common';
import { Size } from '../entities/sizes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSizeDto } from '../dto/create-size.dto';

@Injectable()
export class SizesRepository {
  constructor(
    @InjectRepository(Size)
    private readonly sizeRepository: Repository<Size>
  ) { }

  async createManyFromSeed(createSizeDto: CreateSizeDto[]) {
    return await this.sizeRepository.insert(createSizeDto);
  }

  async readByName(name: string) {
    return await this.sizeRepository.findOne({ where: { name } });
  }

  async deleteAll() {
    return await this.sizeRepository.delete({});
  }

}
