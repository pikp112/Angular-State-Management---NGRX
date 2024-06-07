import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  http = inject(HttpClient);
  constructor() { }

  getProducts() {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
      .pipe(
        map((products: IProduct[]) => products.map(p => ({ ...p, quantity: 1 })))
      );
  }
}
