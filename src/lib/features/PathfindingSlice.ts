import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createGrid } from '@/utils/helpers'
import { AlgorithmType, GridType, MazeType } from '@/utils/types'
import { END_TILE_CONFIG, START_TILE_CONFIG } from '@/utils/constants'

type PathFindingSliceType = {
  algorithm: AlgorithmType
  maze: MazeType
  grid: GridType
  isVisualized: boolean
}

const initialState: PathFindingSliceType = {
  algorithm: 'BFS',
  maze: 'NONE',
  grid: createGrid(START_TILE_CONFIG, END_TILE_CONFIG),
  isVisualized: false,
}

const pathfindingSlice = createSlice({
  name: 'pathfinding',
  initialState,
  reducers: {
    setAlgorithm: (state, action: PayloadAction<AlgorithmType>) => {
      state.algorithm = action.payload
    },
    setMaze: (state, action: PayloadAction<MazeType>) => {
      state.maze = action.payload
    },
    setGrid: (state, action: PayloadAction<GridType>) => {
      state.grid = action.payload
    },
    setIsVisualized: (state, action: PayloadAction<boolean>) => {
      state.isVisualized = action.payload
    },
  },
})

export const { setAlgorithm, setMaze, setGrid, setIsVisualized } =
  pathfindingSlice.actions

export default pathfindingSlice.reducer
