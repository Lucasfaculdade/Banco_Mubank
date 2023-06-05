import { Controller, Get, Post } from '@nestjs/common';
import { Body, HttpCode, UseGuards } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthGuard } from '@nestjs/passport';
import { AccountGenerateService } from 'src/utils/account-generate.service';
import { ContasService } from './contas.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { Contas } from './models/contas.model';

@Controller('contas')
export class ContasController {
    constructor(private readonly contasService: ContasService, 
                private readonly accountGenerateService: AccountGenerateService){}

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    public async signup(@Body() signupDto: SignupDto): Promise<Contas>{
        return this.contasService.signup(signupDto);
    }
    
    @Post('signup')
    public async accountGenerate(): Promise<number>{
        return this.accountGenerateService.generate();
    }

    @Get('signin')
    @HttpCode(HttpStatus.OK)
    public async signin(@Body() signinDto :SigninDto): 
    Promise<{CPF: Number; PASSWORD: String; jwtToken: string}>{
        return this.contasService.singin(signinDto);
    }

}
