import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import { addToCard, decrementProduct, incrementProduct, removeFromCart } from "./cart.action";


export interface CartState {
    products: IProduct[];
    totalPrice: number;
}

export const initialCounterState: CartState = {
    products: [],
    totalPrice: 0
};

export function calculateTotalPrice(products: IProduct[]): number {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
}

export const cartReducer = createReducer(
    initialCounterState,
    on(addToCard, (state, { product }) => {
        const updatedProduct = [...state.products, product];
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)
        }
    }),
    on (incrementProduct, (state, { productId }) => {
        const updatedProduct = state.products.map(p => p.id === productId ? { ...p, quantity: p.quantity + 1 } : p);
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)
        }
    }),
    on (decrementProduct, (state, { productId }) => {
        const updatedProduct = state.products.map(p => p.id === productId ? { ...p, quantity: p.quantity - 1 } : p);
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)
        }
    }),
    on (removeFromCart, (state, { productId }) => {
        const updatedProduct = state.products.filter(p => p.id !== productId);
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)
        }
    })
)