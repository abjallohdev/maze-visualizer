export type AlgorithmType = 'DIJKSTRA' | 'BFS' | 'DFS'

export type MazeType = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION'

export type TileType = {
  row: number
  column: number
  isStart: boolean
  isEnd: boolean
  isWall: boolean
  isPath: boolean
  isTraversed: boolean
  distance: number
  parent: TileType | null
}

export type GridType = TileType[][]
