import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import * as ProductActions from "./product.action";
import { error } from "console";

export interface ProductState {
    products: IProduct[];
    error: string | null;
}

export const initialProductState: ProductState = {
    products: [],
    error: null
};

export const ProductReducer = createReducer(
    initialProductState,
    on(ProductActions.loadProductSuccess, (state, {products}) => ({
        ...state,
        products,
        error: null
    })),
    on (ProductActions.loadProductFailure, (state, {errorMessage}) => ({
        ...state,
        error: errorMessage
    }))
);