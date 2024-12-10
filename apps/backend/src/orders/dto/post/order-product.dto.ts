import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsNumber } from 'class-validator';

export class OrderProductDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    amount: number;
}
