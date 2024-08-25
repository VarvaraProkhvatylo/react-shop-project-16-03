import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

type LikeProductsState = {
    [id:number]: boolean
}

const initialState: LikeProductsState = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
})

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer