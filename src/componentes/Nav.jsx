import React from 'react';
import logoDos from '../assest/logoloro.png';
import '../componentes/Nav.css';



const navbar = () => {
    return(
     <div className="navbar">
      
       <li class="logo"><a href='App'>
        <img src={logoDos} className="App-logodos" alt="logo"/></a>
        <a href='App' class="nav-link">
          <span class="link-text logo-text">Menu</span> 
        </a>
      </li>
      
      <li class="nav-item">
        <a href="Projecto" class="nav-link">
        <lord-icon class="icono"
        src="https://cdn.lordicon.com/rbwzsktr.json"
         trigger="hover">
       </lord-icon>
          <span class="link-text">Projectos</span>
        </a>
      </li>
       
      <li class="nav-item">
        <a href="Contacto" class="nav-link">
        <lord-icon class="icono"
        src="https://cdn.lordicon.com/dxjqoygy.json"
        trigger="hover">
        </lord-icon>
          <span class="link-text">Contacto</span>
        </a>
      </li>
     </div>
    );
};

export default navbar;

