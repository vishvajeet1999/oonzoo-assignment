import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from '../directives/email-validator.directive';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProductsComponent } from './products/products.component'
import { LoggedinService } from './logged-in.service';
import { AuthGuard } from './auth.guard';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    SignupComponent,
    SigninComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoggedinService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
