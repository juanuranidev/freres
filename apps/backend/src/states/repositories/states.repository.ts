import { State } from '../entities/state.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SizeCreateManyFromSeedDto } from '../dto/create/states.create-many-from-seed.dto';

@Injectable()
export class StatesRepository {
    constructor(
        @InjectRepository(State)
        private readonly stateRepository: Repository<State>,
    ) { }

    async createManyFromSeed(createStateDto: SizeCreateManyFromSeedDto[]): Promise<void> {
        await this.stateRepository.insert(createStateDto);
    }

    async readAll(): Promise<State[]> {
        return await this.stateRepository.find();
    }

}
