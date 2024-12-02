import { IsUUID, IsNotEmpty, IsNumber } from 'class-validator';

export class OrderProductDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
}
