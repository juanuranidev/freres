import { State } from 'states/entities/state.entity';
import { StatesService } from 'states/services/states.service';
import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('states')
export class StatesController {
    constructor(
        private readonly statesService: StatesService
    ) { }

    @ApiResponse({ status: 200, description: 'Get all states', type: [State] })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @Get()
    readAll(): Promise<State[]> {
        return this.statesService.readAll();
    }

}
