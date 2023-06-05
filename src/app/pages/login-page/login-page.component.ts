import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
     
  public loginForm: FormGroup = new FormGroup({
    'CPF': new FormControl(null),
    'password': new FormControl(null),
  })


  public loginAccount(): void{
    console.log();
  }
}
