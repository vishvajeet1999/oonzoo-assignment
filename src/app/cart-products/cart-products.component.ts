

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedinService } from '../logged-in.service';
import axios from "axios"
import { ProductInterface } from '../products/products.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {

  constructor(private loggedinService: LoggedinService, private cartService: CartService, private router: Router) {}
  cartProducts: ProductInterface[] = []
  hidden = false;
  numberOfCartItems = 0

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getItems()
    this.numberOfCartItems = this.cartService.getItems().length
  }
  navigateToProducts(){
    this.router.navigate(['products'])
  }
  buyProduct(item: number){

  }
  
  logout(): void{
    this.loggedinService.logout()
    this.router.navigate(['signin'])
  }
}
