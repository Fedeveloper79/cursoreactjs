import React from 'react'
import { resolvePath } from 'react-router-dom'
import ItemCount from './Contador/ItemCount'
import { useEffect, useState } from 'react'
import ItemList from './itemList/ItemList'

const ItemListConteiner = () => {
  const [products, setProducts] = useState([])

  const getProducts = new Promise((resolve, rejeact) => {
    setTimeout(() => {

      resolve(
        [
          {id:1, titulo:"Salta", descripcion: "vivi Salta", precio: 72000, },
          {id:2, titulo:"Jujuy", descripcion: "vivi Jujuy", precio: 86000, },
          {id:3, titulo:"Catamarca", descripcion: "vivi Catamarca", precio: 92000, },
          {id:4, titulo:"Misiones", descripcion: "vivi Misiones", precio: 101000, },
          {id:5, titulo:"Tucuman", descripcion: "vivi Tucuman", precio: 65000, },
          {id:6, titulo:"San Juan", descripcion: "vivi San Juan", precio: 80000, },
        
        ]
      )
    }, 2000);

  })

  useEffect(() => {
    getProducts
      .then((response) => {
        console.log(response)
        setProducts(response)
      })

      .catch(error => console.log(error))
  }, [])




  return (
    <div>
      <h1>Hola, bienvenidos a  Viento Salvaje</h1>
      
      <ItemCount />
      <ItemList articulos={products}/>
      </div>
  )


  
}

export default ItemListConteiner