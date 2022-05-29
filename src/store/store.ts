import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import shopSlice from "./slices/shopSlice";

export const configuredStore = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        shop: shopSlice.reducer
    },
})

export type RootState = ReturnType<typeof configuredStore.getState>;
export type AppDispatch = typeof configuredStore.dispatch;