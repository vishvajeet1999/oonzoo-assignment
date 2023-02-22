import { Injectable } from '@angular/core';
import { ProductInterface } from './products/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartItems: ProductInterface[] = []

  addItems(item: ProductInterface){
    this.cartItems.push(item)
  }
  getItems(){
    return this.cartItems
  }
}
