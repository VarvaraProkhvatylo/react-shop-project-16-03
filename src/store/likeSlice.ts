import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

type LikeProductsState = {
    [id:number]: boolean
}

const initialState: LikeProductsState = {
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

// export const likeSlice1 = createSlice({
//     name:"like",
//     initialState,
//     reducers: {
//         toggleLike: (state, action) => ({
//         ...state,
//         state,[action.payload] : !state[action.payload]
//     })
//     },
// })

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer