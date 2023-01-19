import React from 'react'

const Item = ({producto}) => {
  return (
    <li key={producto.id}>
    {producto.titulo}
  </li>
)
  
}

export default Item