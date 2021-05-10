import "./App.css"
import { Canvas } from "@react-three/fiber"
import { Leva, useControls } from "leva"
import React, { useState } from "react"
import { Vector3 } from "three"
import { Box } from "./Box"
import { OrbitControls } from "@react-three/drei"

function App() {
  const [shuffleCount, setShuffleCount] = useState(0)

  const { max_box_count, box_spacing } = useControls({
    max_box_count: 20,
    box_spacing: 4,
  })

  const boxCount = Math.random() * max_box_count
  const boxPositions: Vector3[] = []
  for (let i = 0; i < boxCount; i++)
    boxPositions.push(
      new Vector3(
        (Math.random() - 0.5) * box_spacing,
        (Math.random() - 0.5) * box_spacing,
        (Math.random() - 0.5) * box_spacing
      )
    )

  return (
    <div className="app-root">
      <Leva oneLineLabels />
      <button
        className="shuffle-button"
        onClick={() => {
          setShuffleCount(shuffleCount + 1)
        }}
      >
        shuffle
      </button>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {boxPositions.map((position, index) => (
          <Box position={position} key={index} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
