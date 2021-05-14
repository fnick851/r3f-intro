import { useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"
import { Mesh, Vector3 } from "three"

function Box(props: { position: [number, number, number] | Vector3 }) {
  const meshRef = useRef<Mesh>()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(({ clock }) => {
    if (meshRef.current)
      meshRef.current.rotation.x = Math.cos(clock.getElapsedTime())
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1 : 0.5}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => {
        setHover(true)
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={(event) => {
        setHover(false)
        document.body.style.cursor = "initial"
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#4a47a3" : "#a7c5eb"} />
    </mesh>
  )
}

export { Box }
