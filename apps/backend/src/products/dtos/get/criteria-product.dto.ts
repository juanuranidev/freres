import { IsUUID, IsNumber, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

export class CriteriaProductDto {
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => value ? parseInt(value) : undefined)
    limit: number;

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => value ? parseInt(value) : undefined)
    offset: number;

    @IsUUID()
    @IsOptional()
    category: string;

    @IsUUID()
    @IsOptional()
    size: string;
}
