import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedinService } from '../logged-in.service';
import axios from "axios"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private loggedinService: LoggedinService, private router: Router) {}
  products: {title: string}[] = []

  ngOnInit(): void {
      axios.get('https://fakestoreapi.com/products').then(res =>{this.products = res.data
    console.log(res.data)})
  }
  logout(): void{
    this.loggedinService.logout()
    this.router.navigate(['signin'])
  }
}
