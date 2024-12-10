import { Outfit } from 'outfits/entities/outfit.entity';
import { ApiResponse } from '@nestjs/swagger';
import { OutfitsService } from 'outfits/services/outfits.service';
import { Controller, Get } from '@nestjs/common';
import { OutfitReadAllResponseDto } from 'outfits/dtos/read/read-all/outfits.read-all-response.dto';

@Controller('outfits')
export class OutfitsController {
    constructor(
        private readonly outfitsService: OutfitsService
    ) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Get all outfits (can be empty)', type: [OutfitReadAllResponseDto] })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    readAll() {
        return this.outfitsService.readAll();
    }

}
