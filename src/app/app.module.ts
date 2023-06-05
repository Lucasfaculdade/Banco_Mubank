import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginPageComponent,
    NewAccountComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [ Auth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
