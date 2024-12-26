import { ApiProperty } from '@nestjs/swagger';

class SizesDto {
    @ApiProperty()
    stock: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    id: string;
}

export class ProductReadByIdResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    updatedAt: string;

    @ApiProperty()
    discount: number;

    @ApiProperty()
    slug: string;

    @ApiProperty()
    description: string;

    @ApiProperty({ type: [String] })
    images: string[];

    @ApiProperty({ type: [String] })
    categories: string[];

    @ApiProperty({ type: [SizesDto] })
    sizes: SizesDto[];
} 