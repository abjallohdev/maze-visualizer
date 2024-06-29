import React, { MutableRefObject, forwardRef } from "react";
import Tile from "./Tile";
import { useAppSelector } from "@/lib/hooks";

type Props = {
  isVisualizerRunning: MutableRefObject<boolean>;
};

const Grid = forwardRef(({ isVisualizerRunning }: Props, ref) => {
  const grid = useAppSelector((state) => state.pathfindingSlice.grid);
  return (
    <div className="mt-10 flex flex-col items-center justify-center border-sky-300">
      {grid.map((rows, index) => (
        <div key={index} className="flex">
          {rows.map((tile, tileIndex) => {
            const { isStart, isEnd, isWall, isPath, isTraversed } = tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                column={tile.column}
                isStart={isStart}
                isEnd={isEnd}
                isWall={isWall}
                isPath={isPath}
                isTraversed={isTraversed}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
});

export default Grid;
