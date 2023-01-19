import React from 'react'
import Item from './Item'

const ItemList = ({ articulos }) => {
    return (
<ul>
        {
            articulos.map((products) => (
                <Item producto={products} />

            )
            )
        }
</ul>
    )
}

export default ItemList