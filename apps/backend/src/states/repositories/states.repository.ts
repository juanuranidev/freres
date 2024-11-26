import { State } from '../entities/state.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStateDto } from '../dto/create-state.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StatesRepository {
    constructor(
        @InjectRepository(State)
        private readonly stateRepository: Repository<State>,
    ) { }

    async createManyFromSeed(createStateDto: CreateStateDto[]) {
        return await this.stateRepository.insert(createStateDto);
    }

    async deleteAll() {
        return await this.stateRepository.delete({});
    }
}
