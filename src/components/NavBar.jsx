import React, { useState } from 'react';
import CartWidget from './CartWidget';
import '../App.css';
import './NavBar.css';

const NavBar = () => {
  const [desplegableVisible, setDesplegableVisible] = useState(false);

  const manejarMouseEnter = () => {
    setDesplegableVisible(true);
  };

  const manejarMouseLeave = () => {
    setDesplegableVisible(false);
  };

  return (
    <div className="navbar-container">
      <h1><strong>SETTING</strong></h1>
      <ul className="lista-barra">
        <li className="fondo-barra"><a href="">Home</a></li>
        <li 
          className="fondo-barra" 
          onMouseEnter={manejarMouseEnter} 
          onMouseLeave={manejarMouseLeave}
        >
          <a href="">Productos</a>
          {desplegableVisible && (
            <ul className="desplegable">
              <li>Hombre</li>
              <li>Mujer</li>
              <li>Niños</li>
            </ul>
          )}
        </li>
        <li className="fondo-barra"><a href="">Nosotros</a></li>
        <li className="fondo-barra"><a href="">Contacto</a></li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;


