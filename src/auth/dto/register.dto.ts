import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
    @IsString()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}