import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from '../directives/email-validator.directive';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component'

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
