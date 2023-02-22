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
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { CartProductsComponent } from './cart-products/cart-products.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    SignupComponent,
    SigninComponent,
    ProductsComponent,
    CartProductsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule
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
