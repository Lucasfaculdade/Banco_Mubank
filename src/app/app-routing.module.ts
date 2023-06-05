import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent,},
  {path: 'about', component: AboutComponent,},
  {path: 'contact', component: ContactComponent,},
  {path: 'loginPage', component: LoginPageComponent,},
  {path: 'newAccount', component: NewAccountComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
