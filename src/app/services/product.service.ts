import { Injectable } from '@angular/core';
import { Products } from '../data/product.data';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll(): Product[]{
    return Products;
  }
}
