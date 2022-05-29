import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Product, ShopState } from "../../types/store";

class CurrentShopState implements ShopState {
    products: [product: Product, count: number][];
    categories: string[];

    public get Products() {
        return this.products;
    }

    public get Categories() {
        return this.categories;
    }

    public constructor(products: [product: Product, count: number][], categories: string[]) {
        this.products = products;
        this.categories = categories;
        this.insertMissingCategoriesFromProducts(products);
    }

    private insertMissingCategoriesFromProducts(products: [product: Product, count: number][]): void {
        const missingCategories = products.reduce((acc, [product]) => {
            product.categories.forEach((category: string) => {
                if (!this.categories.includes(category) && !acc.includes(category)) {
                    acc.push(category);
                }
            })
            return acc;
        }, [] as string[]);
        this.categories.push(...missingCategories);
    }

}

const categoriesPlaceholder = [
    'Games', 'Electronics', 'Clothes', 'Food', 'Furniture', 'Lifestyle'
]

const productsPlaceholder: [product: Product, count: number][] = [
    [{ id: nanoid(), name: 'Tire', price: 100, categories: ['Vehicles', 'Hardware'] }, 30],
    [{ id: nanoid(), name: 'Laptop', price: 1000, categories: ['Electronics', 'Hardware'] }, 15],
    [{ id: nanoid(), name: 'Shirt', price: 50, categories: ['Clothes', 'Lifestyle'] }, 8],
    [{ id: nanoid(), name: 'Bag', price: 20, categories: ['Clothes', 'Lifestyle'] }, 5],
    [{ id: nanoid(), name: 'Coffee', price: 5, categories: ['Food', 'Lifestyle'] }, 9],
    [{ id: nanoid(), name: 'Fancy Bag', price: 50, categories: ['Clothes', 'Lifestyle'] }, 2],
]

const intialStateClass = new CurrentShopState(productsPlaceholder, categoriesPlaceholder);

const initialState: ShopState = {
    categories: intialStateClass.Categories,
    products: intialStateClass.Products
}

const shopSlice = createSlice({
    name: "shop",
    initialState: initialState,
    reducers: {

    }
})


export default {
    reducer: shopSlice.reducer,
    actions: shopSlice.actions
}