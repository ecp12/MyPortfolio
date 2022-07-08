import React from "react";
import logo from '../src/assest/IMG_0429.jpeg';
import '../src/App.css';
import Nav from '../src/componentes/Nav';
import Contacto from '../src/componentes/formulario/Contacto.jsx';
import Projecto from './componentes/Projectos/Projecto';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";




function App() {
  return (
<Router>
  <div className="App">
    
      <div><Nav/></div> 
    <header className="App-header">
      <Switch> 
       <Route path="/App" exact>
      <div class="contenedorimagen">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="Textos">
        <h1 class="titulo">
          Hola, Soy Erick Crespin
        </h1>
        <p class="Bienvenida">
          Soy Desarrollador web y vivo en Bracelona, España.
        </p>
        </div>
      </div>
      </Route>
      <Route path='/Projecto'>
      <div class="Projecto" exact><Projecto/></div>
      </Route>
      <Route path='/Contacto'>
       <div class="Formulario"exact><Contacto/></div>
      </Route>
      </Switch>
    </header>
  </div>
</Router>
  );
}

export default App;
