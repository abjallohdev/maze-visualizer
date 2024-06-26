import { configureStore } from '@reduxjs/toolkit'
import pathfindingSlice from '../lib/features/PathfindingSlice'

export const store = configureStore({
  reducer: {
    pathfindingSlice,
  },
})

export type AppStore = ReturnType<typeof configureStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
