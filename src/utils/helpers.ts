import { MAX_COLS, MAX_ROWS } from './constants'
import { GridType, TileType } from './types'

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
  const currentRow = []

  for (let column = 0; column < MAX_COLS; column++) {
    currentRow.push({
      row,
      column,
      isStart: row === startTile.row && column === startTile.column,
      isEnd: row === endTile.row && column === endTile.column,
      isWall: false,
      isPath: false,
      isTraversed: false,
      distance: Infinity,
      parent: null,
    })
  }
  return currentRow
}

export const createGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = []

  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile))
  }

  return grid
}
