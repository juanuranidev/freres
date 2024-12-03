import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";

class ImageDto {
    @IsString()
    @IsNotEmpty()
    url: string;
}

class SizeDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}

class CategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    discount: number;

    @IsString()
    slug: string;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImageDto)
    images: ImageDto[];

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SizeDto)
    sizes: SizeDto[];

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CategoryDto)
    categories: CategoryDto[];
}
