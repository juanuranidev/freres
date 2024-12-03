import { State } from 'states/entities/state.entity';
import { StatesService } from 'states/services/states.service';
import { Controller, Get } from '@nestjs/common';

@Controller('states')
export class StatesController {
    constructor(
        private readonly statesService: StatesService
    ) { }

    @Get()
    readAll(): Promise<State[]> {
        return this.statesService.readAll();
    }

}
