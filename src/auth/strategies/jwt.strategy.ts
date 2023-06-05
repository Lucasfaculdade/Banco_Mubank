import { Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { JwtPayload } from "../models/jwt-payload.model";
import { Contas } from "src/contas/models/contas.model";
import { AuthService } from "../auth.service";
import { Strategy } from 'passport-local';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
      
      super({ 
        jwyFromRequest: authService.returnJwtExtractor(),
        ignoreExpiration: false,
        secrectOfKey: process.env.JWT_SECRET,
      });
    }
    async validate(jwtPayload: JwtPayload): Promise<Contas> {
       const account = await this.authService.validateAccount(jwtPayload);
       if(!account){
        throw new UnauthorizedException();
       }
       return account;
    }
}