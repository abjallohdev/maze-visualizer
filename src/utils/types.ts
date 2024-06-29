export type AlgorithmType = "A-STAR" | "DIJKSTRA" | "BFS" | "DFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export type TileType = {
  row: number;
  column: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  isTraversed: boolean;
  distance: number;
  parent: TileType | null;
};

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;

export type MazeSelectType = {
  name: string;
  value: MazeType;
};

export type AlgorithmSelectType = {
  name: string;
  value: AlgorithmType;
};

export type SpeedSelectType = {
  name: string;
  value: SpeedType;
};
