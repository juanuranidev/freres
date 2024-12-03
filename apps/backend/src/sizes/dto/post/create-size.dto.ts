import { IsNotEmpty, IsString } from "class-validator";

export class CreateSizeDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
