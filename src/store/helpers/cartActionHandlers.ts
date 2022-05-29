import { customLogger } from "../../shared/logger";
import { CartState } from "../../types/store";

const NAMESPACE = 'CART_ACTION_HANDLERS';

export const addProductHandler = (state: CartState, productId: string): CartState => {
    if (state.products.hasOwnProperty(productId)) {
        customLogger(NAMESPACE, `addProductHandler -> cart already has product of id ${productId}`, 'WARNING');
        return state
    };
    customLogger(NAMESPACE, `addProductHandler -> adding product of id ${productId} to cart`, 'SUCCESS');
    return { ...state, products: { ...state.products, [productId]: 1 } };
}

export const removeProductHandler = (state: CartState, productId: string): CartState => {
    if (!state.products.hasOwnProperty(productId)) {
        customLogger(NAMESPACE, `removeProductHandler -> productId ${productId} not found in cart`, 'ERROR');
        return state
    };
    const { [productId]: _, ...rest } = state.products;
    customLogger(NAMESPACE, `removeProductHandler -> removing product of id ${productId} from cart`);
    return { ...state, products: rest };
}

export const clearCartHandler = (state: CartState): CartState => {
    customLogger(NAMESPACE, `checkHasProductHandler -> clearing cart...`);
    return { ...state, products: {} };
}

export const checkHasProductHandler = (state: CartState, productId: string): boolean => {
    const { products } = state;
    const result = !!products[productId];
    customLogger(NAMESPACE, `checkHasProductHandler -> does cart have ${productId}? ${result}`);
    return result;
}

export const checkIsEmptyHandler = (state: CartState): boolean => {
    const { products } = state;
    const result = Object.keys(products).length === 0;
    customLogger(NAMESPACE, `checkIsEmptyHandler -> is cart empty? ${result}`);
    return result;
}

export const getCartCountHandler = (state: CartState): number => {
    const { products } = state;
    customLogger(NAMESPACE, `getCartCountHandler -> cart count is ${Object.keys(products).length}`);
    return Object.keys(products).length;
}

export const changeProductCountHandler = (state: CartState, productId: string, count: number): CartState => {
    const { products } = state;
    if (!checkHasProductHandler(state, productId)) {
        customLogger(NAMESPACE, `changeProductCountHandler -> Product with id ${productId} does not exist in cart`, 'ERROR');
        return state
    };
    customLogger(NAMESPACE, `changeProductCountHandler -> Changing product count for product with id ${productId} to ${count}`, 'SUCCESS');
    return { ...state, products: { ...products, [productId]: count } };

}