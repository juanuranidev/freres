import { Type } from 'class-transformer';
import { OrderProductDto } from './order-product.dto';
import { IsString, IsNotEmpty, IsNumber, IsArray, IsUUID, ValidateNested, ArrayMinSize } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    buyerFullName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    direction: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    postalCode: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    notes: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    stateId: string;

    @ApiProperty({ type: () => [OrderProductDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => OrderProductDto)
    products: OrderProductDto[];
}
