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

export const DEFAULT_TILE_STYLE =
  "border-t border-r border-sky-200 h-[7px] xs:h-[8px] md:h-[15px] lg:h-[17px] w-[7px] xs:w-[8px] md:w-[15px] lg:w-[17px]"
export const START_TILE_STYLE = DEFAULT_TILE_STYLE + ' bg-green-400'
export const END_TILE_STYLE = DEFAULT_TILE_STYLE + ' bg-red-400'
export const WALL_TILE_STYLE = DEFAULT_TILE_STYLE + ' bg-gray-400'
export const PATH_TILE_STYLE = DEFAULT_TILE_STYLE + ' bg-yellow-400'
export const TRAVERSED_TILE_STYLE = DEFAULT_TILE_STYLE + ' bg-cyan-400'
