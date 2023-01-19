import React from 'react';
import './Style.css';
import { useState } from 'react';

const ItemCount = () => {
const[Contador, setContador] = useState(0)
const stock = 14

const sumar = ()=>{
    if (stock === Contador){
        return
    }
    setContador(Contador+1)
}


const restar = ()=>{
    if (Contador===0){
        return
    }
    setContador (Contador-1)
}

    return (
        <div className='counter'>
            <div className='controller'>
                <button onClick={()=>restar()}>-</button>
                <div>
                    <span>{Contador}</span>
                </div>
                <button onClick={()=>sumar()}>+</button>
            </div>
            <div>
                <button>Agregar al Carrito</button>
            </div>

        </div>
    )
}

export default ItemCount