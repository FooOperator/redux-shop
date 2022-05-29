import { Store } from "@reduxjs/toolkit";

export type Product = {
    public id: string;
    public name: string;
    public price: number;
    public categories: string[];
}

export type ProductId = keyof Product;

export type CartState = {
    products: {
        [key: string]: number
    };
}

export type ShopState = {
    products: [product: Product, count: number][];
    categories: string[];
}