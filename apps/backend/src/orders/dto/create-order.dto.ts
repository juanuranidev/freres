import { Type } from 'class-transformer';
import { OrderProductDto } from './order-product.dto';
import { IsString, IsNotEmpty, IsNumber, IsArray, IsUUID, ValidateNested, ArrayMinSize } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    buyerFullName: string;

    @IsString()
    @IsNotEmpty()
    direction: string;

    @IsNumber()
    @IsNotEmpty()
    postalCode: number;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    notes: string;

    @IsUUID()
    @IsNotEmpty()
    stateId: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => OrderProductDto)
    products: OrderProductDto[];
}
