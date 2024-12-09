import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";

class ImageDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    url: string;
}

class SizeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
}

class CategoryDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
}

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    discount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    slug: string;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({ type: () => [ImageDto] })
    @Type(() => ImageDto)
    images: ImageDto[];

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({ type: () => [SizeDto] })
    @Type(() => SizeDto)
    sizes: SizeDto[];

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({ type: () => [CategoryDto] })
    @Type(() => CategoryDto)
    categories: CategoryDto[];
}
