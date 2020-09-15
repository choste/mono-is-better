import React from 'react'
import { Box } from '@material-ui/core'

interface AddProps {
    x: number;
    y: number;
}

export default function Add(props: AddProps) {
  return (
  <>
    <Box>{`${props.x} + ${props.y} = ${props.x + props.y}`}</Box>
  </>
  )
}
