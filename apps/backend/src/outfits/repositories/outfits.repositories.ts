import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOutfitDto } from "../dto/create-outfit.dto";
import { Outfit } from "../entities/outfit.entity";
import { Repository } from "typeorm";



@Injectable()
export class OutfitsRepository {
    constructor(
        @InjectRepository(Outfit)
        private readonly outfitRepository: Repository<Outfit>
    ) { }

    async createManyFromSeed(createOutfitDto: CreateOutfitDto[]) {
        return await this.outfitRepository.insert(createOutfitDto);
    }

    async deleteAll() {
        return await this.outfitRepository.delete({});
    }

}
