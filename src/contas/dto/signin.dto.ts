import { IsNotEmpty, IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class SigninDto{


    @IsNotEmpty()
    @IsString()
    NOME_DO_CLIENTE: String;

    @IsNotEmpty()
    @IsNumber()
    CPF: Number;
    
    @IsNotEmpty()
    @IsNumber()
    DATA_DE_NASCIMENTO: Date;

    @IsNotEmpty()
    @IsString()
    PASSWORD: String;

}