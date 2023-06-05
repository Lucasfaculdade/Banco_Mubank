import { Injectable } from "@nestjs/common";


@Injectable()
export class AccountGenerateService{
    generate(): number{
        return Math.random();
    }
}