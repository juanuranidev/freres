import { State } from '../entities/state.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStateDto } from '../dto/post/create-state.dto';

@Injectable()
export class StatesRepository {
    constructor(
        @InjectRepository(State)
        private readonly stateRepository: Repository<State>,
    ) { }

    async createManyFromSeed(createStateDto: CreateStateDto[]): Promise<void> {
        await this.stateRepository.insert(createStateDto);
    }

    async readAll(): Promise<State[]> {
        return await this.stateRepository.find({
            select: {
                name: true
            }
        });
    }

}
