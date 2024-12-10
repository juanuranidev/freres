import { IsNotEmpty, IsString } from "class-validator";

export class SizeCreateManyFromSeedDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
