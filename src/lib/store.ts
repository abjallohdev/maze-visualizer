import { configureStore } from '@reduxjs/toolkit'
import pathfindingSlice from '../lib/features/PathfindingSlice'
import tileSlice from '../lib/features/TileSlice'

export const store = configureStore({
  reducer: {
    pathfindingSlice,
    tileSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppStore = ReturnType<typeof configureStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
