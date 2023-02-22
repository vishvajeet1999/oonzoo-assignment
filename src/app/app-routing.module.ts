import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path: 'signup', component: SignupComponent},
  {path: '', component: SigninComponent},
  {path: 'products', component: ProductsComponent, canActivate:[AuthGuard]},
  {path: 'cart', component: CartProductsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
