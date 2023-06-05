import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';


export const ContasSchema = new mongoose.Schema({
  
    NOME_DO_CLIENTE:{
        type: String,
    },
    CPF:{
        type: Number,
    },
    E_MAIL:{
        type: String,
    },
    PASSWORD:{
        type: String,
    },
});

ContasSchema.pre('save', async function (next){
    try{
        if(!this.isModified('PASSWORD')){
            return next()
        }
        // console.log(bcrypt)
        this['PASSWORD'] = await (bcrypt.hash(this['PASSWORD'], 6))
        
    } catch (err){
        throw (err);
    }
});

