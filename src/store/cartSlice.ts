import { createSlice } from "@reduxjs/toolkit";

type ProductsInCart = {
        [id: number]: number
    }


const initialState: ProductsInCart = {
    1:3,
    2:3
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
})

export default cartSlice.reducer