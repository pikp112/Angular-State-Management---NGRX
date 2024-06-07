import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
    selectCartState,
    (state) => state.products
);

export const selectCartTotal = createSelector(
    selectCartProducts,
    (products) => products.reduce((acc, product) => acc + product.price * product.quantity, 0)
);