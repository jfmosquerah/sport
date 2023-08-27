import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tienda Deportiva</h1>
      <h3>Prueba de que la pagina sirve.</h3>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Tienda Deportiva</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com/tienda.deportiva" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/tienda_deportiva" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/tiendadeportiva" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
