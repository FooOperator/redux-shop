import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../../types/store";
import { addProductHandler, changeProductCountHandler, checkHasProductHandler, checkIsEmptyHandler, clearCartHandler, getCartCountHandler, removeProductHandler } from "../helpers/cartActionHandlers";

const initialState: CartState = {
    products: {

    },
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<string>) => {
            return addProductHandler(state, action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            return removeProductHandler(state, action.payload);
        },
        changeProductCount: (state, action: PayloadAction<{ productId: string, count: number }>) => {
            return changeProductCountHandler(state, action.payload.productId, action.payload.count);
        },
        decrementProductCount: (state, action: PayloadAction<string>) => {
            state.products[action.payload]--;
        },
        incrementProductCount: (state, action: PayloadAction<string>) => {
            state.products[action.payload]++;
        },
        clearCart: (state) => {
            return clearCartHandler(state);
        },
    }
});

export default {
    reducer: cartSlice.reducer,
    actions: cartSlice.actions,
}