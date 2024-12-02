import { IsArray, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateOutfitDto {
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    imageUrl: string

    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    products: string[]
}
