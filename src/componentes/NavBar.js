import './StyleNavBar.css'
import React from 'react'
import logo from '../assets/Logo.PNG'


const NavBar = () => {
  return (
    <div >
      <div><img src={logo}></img></div>
      <ul className='NavBar'>
        <li>Inicio</li>
        <li>Ciudades</li>
        <li>Excursiones</li>
        <li>Galeria</li>
        <li>Contacto</li>
      </ul>

    </div>
  )
}

export default NavBar