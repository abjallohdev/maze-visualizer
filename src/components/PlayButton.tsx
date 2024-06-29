import { CircleStop, Play } from "lucide-react";
import React from "react";

type Props = {
  isDisabled: boolean;
  isVisualized: boolean;
};

const PlayButton = ({ isDisabled, isVisualized }: Props) => {
  return (
    <button
      disabled={isDisabled}
      className="rounded-full border-none bg-green-500 p-2 shadow-md transition ease-in hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-30 active:ring-green-300 disabled:pointer-events-none disabled:opacity-50"
    >
      {isVisualized ? (
        <CircleStop size={20} color="white" />
      ) : (
        <Play size={20} color="white" />
      )}
    </button>
  );
};

export default PlayButton;
