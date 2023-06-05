import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Conta } from 'src/app/conta.model';

import { Auth } from '../../auth.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  
  public registerForm: FormGroup = new FormGroup({
    'fullName': new FormControl('', Validators.minLength(5)),
    'email': new FormControl('', Validators.email),
    'CPF': new FormControl('', Validators.maxLength(11)),
    'date': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.maxLength(6)),
  })

  constructor(
    private auth: Auth
  ){}

  public cadastrarConta(): void{
    let conta: Conta = new Conta(
      this.registerForm.value.fullName,
      this.registerForm.value.email,
      this.registerForm.value.CPF,
      this.registerForm.value.date,
      this.registerForm.value.password
    ) 
    this.auth.createAccount()
  }

}
