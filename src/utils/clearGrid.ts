import {
  DEFAULT_TILE_STYLE,
  END_TILE_CONFIG,
  MAX_COLS,
  MAX_ROWS,
  START_TILE_CONFIG,
} from "./constants";
import { isEqual } from "./helpers";
import { GridType, TileType } from "./types";

export const clearGrid = (
  grid: GridType,
  startTile: TileType = START_TILE_CONFIG,
  endTile: TileType = END_TILE_CONFIG,
) => {
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const tile = grid[row][col];
      tile.distance = Infinity;
      tile.isPath = false;
      tile.isWall = false;
      tile.isTraversed = false;
      tile.parent = null;

      if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
        const tileElement = document.getElementById(
          `${tile.row}-${tile.column}`,
        );

        if (tileElement) {
          tileElement.className = DEFAULT_TILE_STYLE;
        }

        if (tile.row === MAX_ROWS - 1) {
          tileElement?.classList.add("border-b");
        }

        if (tile.column === 0) {
          tileElement?.classList.add("border-l");
        }
      }
    }
  }
};
