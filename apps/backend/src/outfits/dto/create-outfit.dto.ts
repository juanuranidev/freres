import { IsArray, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateOutfitDto {
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    image_url: string

    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    products: string[]
}
