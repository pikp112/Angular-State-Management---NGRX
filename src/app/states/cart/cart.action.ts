import { createAction, props } from "@ngrx/store"; 
import { IProduct } from "../../shared/models/product.interface";

export const addToCard = createAction('[Cart] Add to cart', props<{ product: IProduct }>());
export const incrementProduct = createAction('[Cart] Increment product', props<{ productId: number }>());
export const decrementProduct = createAction('[Cart] Decrement product', props<{ productId: number }>());
export const removeFromCart = createAction('[Cart] Remove from cart', props<{ productId: number }>());
