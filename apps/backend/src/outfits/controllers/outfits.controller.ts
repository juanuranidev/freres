import { Controller, Get } from '@nestjs/common';
import { OutfitsService } from 'outfits/services/outfits.service';
import { OutfitReadAllResponseDto } from 'outfits/dtos/response/outfit-read-all.response.dto';

@Controller('outfits')
export class OutfitsController {
    constructor(
        private readonly outfitsService: OutfitsService
    ) { }

    @Get()
    readAll(): Promise<OutfitReadAllResponseDto[]> {
        return this.outfitsService.readAll();
    }

}
