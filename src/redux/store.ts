import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likeSlice'

export const store = configureStore({
  reducer: {
    productsLikeState: likeSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch