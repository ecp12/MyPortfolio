import React from 'react';
import '../Projectos/Projecto.css';
import demo from '../../../src/assest/Demo.gif'
import demoDos from '../../../src/assest/demoGif.gif'



const Projecto = () => {
    return(
      <div class="contenedorProjecto">
        <div class="Projectos">
         <div class="pagProjecto">
          <img src={demo} class="gif" alt="" />
          <p class="textosDos">Relog echo con Js</p>
          <a href="https://github.com/ecp12/Relog">
          <button class="custom-btn btn-12"><span>Click!</span><span>ver codigo</span></button></a>
         </div>
         <div class="pagProjecto">
         <img src={demoDos} class="gif" alt="" />
         <p class="textosDos">Projecto realizado de una web musical</p>
         <a href="https://github.com/ecp12/Tocar-El-Dom">
         <button class="custom-btn btn-12"><span>Click!</span><span>ver codigo</span></button></a>
         </div>
        </div>
      </div> 
);
};

export default Projecto;