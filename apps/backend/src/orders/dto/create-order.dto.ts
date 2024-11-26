import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    buyer_full_name: string;

    @IsString()
    @IsNotEmpty()
    direction: string;

    @IsNumber()
    @IsNotEmpty()
    postal_code: number;

    @IsString()
    @IsNotEmpty()
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    notes: string;

    @IsNumber()
    @IsNotEmpty()
    state_id: number;
}
