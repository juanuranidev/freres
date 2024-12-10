import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { SeedService } from '../services/seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }

  @Get()
  @ApiResponse({ status: 200, description: 'Seed database' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  run() {
    return this.seedService.run();
  }
}
