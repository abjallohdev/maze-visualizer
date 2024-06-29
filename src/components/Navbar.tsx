import React, { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { ALGORITHMS, MAZES, SPEEDS } from "@/utils/constants";
import Dropdown from "./Dropdown";

type Props = {};

const Navbar = ({}: Props) => {
  const { maze, algorithm } = useAppSelector((state) => state.pathfindingSlice);
  const { speed } = useAppSelector((state) => state.SpeedSlice);
  const [isDisabled, setIsDisabled] = useState(false);
  console.log(maze);
  return (
    <div className="flex min-h-[4.5rem] items-center justify-center border-b px-0 shadow-gray-600 sm:px-5">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex w-full items-center justify-center lg:justify-between">
          <h1 className="hidden pl-1 text-2xl lg:flex">Maze Visualizer</h1>
          <div className="flex items-center justify-center gap-6 py-2">
            <Dropdown
              value={maze}
              label="Maze Generator"
              isDisabled={isDisabled}
              options={MAZES}
              onChange={(e) => {}}
            />
            <Dropdown
              value={algorithm}
              label="Pathfinder"
              isDisabled={isDisabled}
              options={ALGORITHMS}
              onChange={(e) => {}}
            />
            <Dropdown
              value={speed}
              label="Speed"
              isDisabled={isDisabled}
              options={SPEEDS}
              onChange={(e) => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
