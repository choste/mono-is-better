import React from 'react'

interface SubtractProps {
    x: number;
    y: number;
}

export default function Subtract(props: SubtractProps) {
  return <div>{`${props.x} + ${props.y} = ${props.x + props.y}`}</div>
}
