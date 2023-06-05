import { Document } from 'mongoose';

export interface Contas extends Document {
      
      
      NOME_DO_CLIENTE: string;
      CPF: number;
      DATA_DE_NASCIMENTO: Date;
      PASSWORD: string;

}
