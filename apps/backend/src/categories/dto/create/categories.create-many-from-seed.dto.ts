import { IsNotEmpty, IsString } from "class-validator";

export class CategoryCreateManyFromSeedDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
