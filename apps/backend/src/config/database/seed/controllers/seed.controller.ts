import { Controller, Get } from '@nestjs/common';
import { SeedService } from '../services/seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }

  @Get()
  run() {
    return this.seedService.run();
  }
}
