import { configureStore } from '@reduxjs/toolkit'
import pathfindingSlice from './features/PathfindingSlice'
import tileSlice from './features/TileSlice'
import SpeedSlice from './features/SpeedSlice'

export const store = configureStore({
  reducer: {
    pathfindingSlice,
    tileSlice,
    SpeedSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppStore = ReturnType<typeof configureStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
