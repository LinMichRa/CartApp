import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent,CartComponent],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit{
  products: Product[] = [];

  items: CartItem[] = [];

  constructor(private service: ProductService){

  }
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

  onAddCart(product:Product){
    this.items = [...this.items,{product: {...product},quantity:1}];
  }
}

