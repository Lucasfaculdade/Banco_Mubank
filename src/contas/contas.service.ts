import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { SigninDto } from './dto/signin.dto';
import { Contas } from './models/contas.model';

@Injectable()
export class ContasService {
    constructor(
        @InjectModel('Contas')
        private readonly contasModel: Model<Contas>,
        private readonly authService: AuthService
    ){}

    public async signup(signupDto: SigninDto): Promise<Contas>{
        const conta = new this.contasModel(signupDto);
        return conta.save();
    }
    
    public async singin(signinDto: SigninDto): 
      Promise<{CPF: Number; PASSWORD: String; jwtToken: string}>{
        const conta = await this.findByCPF(signinDto.CPF);
        const match = await this.checkPassword(signinDto.PASSWORD, conta);

        if(!match){
            throw new NotFoundException('Invalid credentials');
        }

        const jwtToken = await this.authService.createAccessToken(conta._id);

        return { CPF: conta.CPF, PASSWORD: conta.PASSWORD, jwtToken }
    }

    public async findAll(): Promise<Contas[]>{
      return this.contasModel.find();
    }

   private async findByCPF(CPF: Number): Promise<Contas>{
      const conta = await this.contasModel.findOne({CPF});
     if(!conta){
        throw new NotFoundException('Account number not found');
     }
     return conta
   }    

   private async checkPassword(PASSWORD: String, conta: Contas): Promise<boolean>{
    const match = await bcrypt.compare(PASSWORD, conta.PASSWORD);
    if(!match){
      console.log(PASSWORD)
        throw new NotFoundException('Password not found');
    }
    return match;
   }
}
