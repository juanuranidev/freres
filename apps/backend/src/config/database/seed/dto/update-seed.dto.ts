import { PartialType } from '@nestjs/mapped-types';
import { CreateSeedDto } from './create-seed.dto';

export class UpdateSeedDto extends PartialType(CreateSeedDto) {}
