import React from 'react'

const Item = ({ producto }) => {
  return (
    <li  width='600px'>
      <img alt={producto.titulo} src={producto.image} width='300px'/>
      <h2>{producto.titulo}</h2>
      <h3>{producto.descripcion}</h3>
      <h3>${producto.precio}</h3>
    </li>
  )

}

export default Item