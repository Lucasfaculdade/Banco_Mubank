import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtPayload, sign } from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Contas } from 'src/contas/models/contas.model';
import { Request } from 'express';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('Contas')
        private readonly accountModel: Model<Contas>,
    ){}
    public async createAccessToken(accountId: string): Promise<string>{
        return sign({ accountId }, process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRATION,
        });
    }
    public async validateAccount(jwtPayLoad: JwtPayload): Promise<Contas> {
        const account = await this.accountModel.findOne({ _id: jwtPayLoad.accountId });
        if(!account){
            throw new UnauthorizedException('Account not found.');
        }
        return account;
    }

    private jwtExtractor(request: Request): string {
       const authHeader = request.headers.authorization;

       if(!authHeader){
        throw new BadRequestException('Bad request.');
       }
       const [, token] = authHeader.split('');

       return token;
    }

    public returnJwtExtractor(): (request: Request) => string {
        return this.jwtExtractor;
    }
}
