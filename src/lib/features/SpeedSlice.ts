import { SpeedType } from '@/utils/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SpeedSliceType = {
  speed: SpeedType
}

const initialState: SpeedSliceType = {
  speed: 0.5,
}

const speedSlice = createSlice({
  name: 'speed',
  initialState,
  reducers: {
    setSpeed: (state, action: PayloadAction<SpeedType>) => {
      state.speed = action.payload
    },
  },
})

export const { setSpeed } = speedSlice.actions

export default speedSlice.reducer
