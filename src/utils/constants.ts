const MAX_ROWS = 39
const MAX_COLS = 49

const START_TILE_CONFIG = {
  row: 1,
  column: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  distance: 0,
  parent: null,
}

const END_TILE_CONFIG = {
  row: MAX_ROWS - 2,
  column: MAX_COLS - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  distance: 0,
  parent: null,
}

export { MAX_ROWS, MAX_COLS, START_TILE_CONFIG, END_TILE_CONFIG }
