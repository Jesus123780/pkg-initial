import React, { useState } from 'react'
import { Carrusel3D } from './Carrusel3d'; // Asegúrate de importar el componente correctamente

export default {
  title: 'molecules/Carrusel3D',

  component: Carrusel3D
}

const SampleCard = () => {
  return <div style={{ backgroundColor: 'lightblue', width: '200px', height: '200px' }}>Sample Card</div>
}

export const Default = () => {
  const [active, setActive] = useState(0)

  const handleMoveLeft = () => {
    setActive((prev) => {
      return Math.max(prev - 1, 0)
    })
  }

  const handleMoveRight = () => {
    setActive((prev) => {
      return Math.min(prev + 1, 2)
    }) // Assuming maxView is 3
  }

  return (
    <Carrusel3D
      active={active}
      maxView={3}
      moveLeft={handleMoveLeft}
      moveRight={handleMoveRight}
    >
      <SampleCard />
      <SampleCard />
      <SampleCard />
    </Carrusel3D>
  )
}
