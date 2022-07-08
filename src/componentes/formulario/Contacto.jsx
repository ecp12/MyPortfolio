import React from 'react';
import '../../../src/componentes/formulario/Contacto.css';
const contacto = () => {
    return(
      <form class="miFormulario" id="mi-form" action="https://formspree.io/f/xrgjwbog" method="POST">
      <div class="contFormulario">
      <label class="titulos">Email:</label>
      <input class="casillas" type="email" name="email" />
      </div> 
      <div class="contFormulario"> 
      <label class="titulos" >Mensaje:</label>
      <input class="casillas" type="text" name="message" />
      </div>
      <button class="mi-form-boton">Enviar</button>
      </form>
    );
};

export default contacto;
