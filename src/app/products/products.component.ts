import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedinService } from '../logged-in.service';
import axios from "axios"
import { ProductInterface } from './products.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private loggedinService: LoggedinService, private cartService: CartService, private router: Router) {}
  products: ProductInterface[] = []
  hidden = false;
  numberOfCartItems = 0

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.numberOfCartItems = this.cartService.getItems().length
    axios.get('https://fakestoreapi.com/products').then(res =>{this.products = res.data
    console.log(res.data)})
  }
  addToCart(id: number){
    const item = this.products.filter(res => res.id === id)
    this.cartService.addItems(item[0])
    console.log(this.cartService.cartItems)
    this.numberOfCartItems = this.cartService.cartItems.length

  }
  navigateToCart(){
    this.router.navigate(['cart'])
  }
  logout(): void{
    this.loggedinService.logout()
    this.router.navigate(['signin'])
  }
}
