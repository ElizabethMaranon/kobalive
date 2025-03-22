import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import '../estilos/App.scss';
// Complementos de la aplicación
import Encabezado from './encabezadoPie/encabezado';
import Pie from './encabezadoPie/pie';
// Páginas de la aplicación
import Home from './pagina/home';
import Sobre from './pagina/sobre';
import Faq from './pagina/faq';
import Merchandising from './pagina/merchandising';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Encabezado />
        <Router>
          <nav className="navegador">
            <NavLink to="/" className="link-home" activeClassName="active">Home</NavLink>
            <NavLink to="/sobre" className="link-sobre" activeClassName="active">Sobre</NavLink>
            <NavLink to="/faq" className="link-faq" activeClassName="active">FAQ</NavLink>
            <NavLink to="/merchandising" className="link-merchandising" activeClassName="active">Merchandising</NavLink>
          </nav>
          <div className="rutas">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/merchandising" element={<Merchandising />} />
            </Routes>
          </div>
        </Router>
        <Pie />
      </div>
    );
  }
}
