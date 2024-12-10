import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";

export class OutfitProductsDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    slug: string;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ type: [String] })
    image_urls: string[];
}

export class OutfitReadAllResponseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    image_url: string;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ type: [OutfitProductsDto] })
    products: OutfitProductsDto[];
}
