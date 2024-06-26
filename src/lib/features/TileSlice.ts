import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TileType } from '@/utils/types'
import { END_TILE_CONFIG, START_TILE_CONFIG } from '@/utils/constants'

type TileSliceType = {
  startTile: TileType
  endTile: TileType
}

const initialState: TileSliceType = {
  startTile: START_TILE_CONFIG,
  endTile: END_TILE_CONFIG,
}

const tileSlice = createSlice({
  name: 'tiles',
  initialState,
  reducers: {
    setStartTile: (state, action: PayloadAction<TileType>) => {
      state.startTile = action.payload
    },
    setEndTile: (state, action: PayloadAction<TileType>) => {
      state.endTile = action.payload
    },
  },
})

export const { setStartTile, setEndTile } = tileSlice.actions

export default tileSlice.reducer
