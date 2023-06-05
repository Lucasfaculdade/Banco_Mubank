import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class SignupDto{



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