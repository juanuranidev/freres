import { ApiProperty } from '@nestjs/swagger';

class SizeResponse {
    @ApiProperty()
    stock: number;

    @ApiProperty()
    name: string;
}

export class ProductsReadAllResponseDto {
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

    @ApiProperty({ type: [SizeResponse] })
    sizes: SizeResponse[];
} 