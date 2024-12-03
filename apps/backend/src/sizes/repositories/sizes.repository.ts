import { Size } from '../entities/size.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateSizeDto } from '../dto/post/create-size.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SizesRepository {
  constructor(
    @InjectRepository(Size)
    private readonly sizeRepository: Repository<Size>,
  ) { }

  async createManyFromSeed(createSizeDto: CreateSizeDto[]): Promise<void> {
    await this.sizeRepository.insert(createSizeDto);
  }

  async readByName(name: string): Promise<Size | null> {
    return await this.sizeRepository.findOne({ where: { name } });
  }

}
