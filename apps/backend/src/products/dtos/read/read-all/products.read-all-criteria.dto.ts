import { IsUUID, IsNumber, IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ProductReadAllCriteriaDto {
    @IsNumber()
    @IsOptional()
    @ApiProperty({ required: false })
    @Transform(({ value }) => value ? parseInt(value) : undefined)
    limit: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ required: false })
    @Transform(({ value }) => value ? parseInt(value) : undefined)
    offset: number;

    @IsUUID()
    @IsOptional()
    category: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    size: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    title: string;
}
