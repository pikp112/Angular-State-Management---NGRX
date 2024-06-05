import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/componets/product-card/product-card.component';
import { IProduct } from '../shared/models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe, CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
 http = inject(HttpClient);
 error = '';
 products$ = this.http.get('https://fakestoreapi.com/products') as Observable<IProduct[]>;

}