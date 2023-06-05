import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { AccountGenerateService } from 'src/utils/account-generate.service';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { ContasSchema } from './schemas/contas.schema';



@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Contas',
        schema: ContasSchema,
      },
    ]),
    AuthModule
  ],
  controllers: [ContasController],
  providers: [ContasService, AccountGenerateService]
})
export class ContasModule {}
