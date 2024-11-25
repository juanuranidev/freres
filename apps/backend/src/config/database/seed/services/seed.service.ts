import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from '../dto/create-seed.dto';
import { UpdateSeedDto } from '../dto/update-seed.dto';
import { SeedRepository } from '../repository/seed.repository';

@Injectable()
export class SeedService {
  constructor(
    private readonly seedRepository: SeedRepository
  ) { }


  run(body: any) {
    return this.seedRepository.run(body);
  }
}
