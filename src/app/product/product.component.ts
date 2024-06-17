import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/componets/product-card/product-card.component';
import { IProduct } from '../shared/models/product.interface';
import { ProductApiService } from '../shared/services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCard } from '../states/cart/cart.action';
import * as ProductActions from '../states/product/product.action';
import * as ProductSelectors from '../states/product/product.selector';
import { CartStore } from '../store/cart.store';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe, CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  productApi = inject(ProductApiService);
  products$!: Observable<IProduct[]>;
  error!: Observable<string | null>;
  cartStore = inject(CartStore);

  constructor(private store:Store<{cart: {products:IProduct[]}}>){
    this.store.dispatch(ProductActions.loadProduct());
    this.products$ = this.store.select(ProductSelectors.selectAllProducts);
    this.error = this.store.select(ProductSelectors.selectProductError);
  }


  ngOnInit(): void {}
  addItemToCart(product: IProduct) {
    // this.store.dispatch(addToCard({product}));
    this.cartStore.addToCart(product);
  }
}
