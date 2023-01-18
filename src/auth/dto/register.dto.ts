import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsString()
    @MinLength(6)
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}