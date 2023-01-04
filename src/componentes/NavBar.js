import './StyleNavBar.css'
import React from 'react'
import logo from '../assets/Logo.PNG'


const NavBar = () => {
  return (
    <div>
      <div className='barra'>
        <span><img src={logo}></img></span>
        <ul className='NavBar'>
          <li>Inicio</li>
          <li>Ciudades</li>
          <li>Excursiones</li>
          <li>Galeria</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar