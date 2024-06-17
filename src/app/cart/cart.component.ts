import { Component, inject } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { decrementProduct, incrementProduct, removeFromCart } from '../states/cart/cart.action';
import { selectCartProducts, selectCartTotal } from '../states/cart/cart.selector';
import { CartStore } from '../store/cart.store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItem$ = this.store.select(selectCartProducts);
  totalPrice$ = this.store.select(selectCartTotal);
  cartStore = inject(CartStore);

  constructor(private store: Store<AppState>){}

  remove(productId: number){
    this.store.dispatch(removeFromCart({productId}));
  }

  increment(productId: number){
    this.store.dispatch(incrementProduct({productId}));
  }

  decrement(productId: number, quantity: number){
    // this.store.dispatch(decrementProduct({productId}));
    if(quantity === 1){
      this.cartStore.removeItem(productId);
    } else {
      this.cartStore.decrement(productId);
    }
  }
}
