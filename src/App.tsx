import { Canvas } from "@react-three/fiber"
import React from "react"
import { Vector3 } from "three"
import "./App.css"
import { Box } from "./Box"

function App() {
  return (
    <div className="app-root">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={new Vector3(-1.2, 0, 0)} />
        <Box position={new Vector3(1.2, 0, 0)} />
      </Canvas>
    </div>
  )
}

export default App
