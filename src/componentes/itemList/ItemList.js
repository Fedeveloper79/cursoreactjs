import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'


const ItemList = ({ articulos }) => {
    return (
        <ul>
            {
              
            articulos.map((products) => (
               <>
               <Link to='/item'>
                    <Item key={articulos.id} producto={products} />
                </Link>
                
                </>)

            )
        }
        </ul>
    )
}

export default ItemList