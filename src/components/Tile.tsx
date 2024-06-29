import React from 'react'
import { twMerge } from 'tailwind-merge'
import {
  DEFAULT_TILE_STYLE,
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from '@/utils/constants'

type Props = {
  row: number
  column: number
  isStart: boolean
  isEnd: boolean
  isWall: boolean
  isPath: boolean
  isTraversed: boolean
}

const Tile = ({
  row,
  column,
  isStart,
  isEnd,
  isWall,
  isPath,
  isTraversed,
}: Props) => {
  let tileStyle

  if (isStart) {
    tileStyle = START_TILE_STYLE
  } else if (isEnd) {
    tileStyle = END_TILE_STYLE
  } else if (isWall) {
    tileStyle = WALL_TILE_STYLE
  } else if (isPath) {
    tileStyle = PATH_TILE_STYLE
  } else if (isTraversed) {
    tileStyle = TRAVERSED_TILE_STYLE
  } else {
    tileStyle = DEFAULT_TILE_STYLE
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? 'border-b' : column === 0 ? 'border-l' : ''

  const edgeStyle = row === MAX_ROWS - 1 && column === 0 && 'border-l'

  return (
    <div
      id={`${row}-${column}`}
      className={twMerge(tileStyle, borderStyle, edgeStyle)}
    />
  )
}

export default Tile
