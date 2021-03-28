import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {RUTAS} from "../helpers/rutas";
  import HomePage from "../pages/HomePage";
  import WeArePage from "../pages/WeArePage";
  import ServicesPage from "../pages/ServicesPage";
  import FormPage from "../pages/FormPage";
  import HelpPage from "../pages/HelpPage";
  import logoHome from "../images/logohome.svg";

  function Header () {
      return (
          <div>
              <Router>
                  <nav className="NavApp">
                      <Link to={RUTAS.inicio}>
                      <img id="logoHome" src={logoHome} alt="logotipo"></img></Link>
                      <Link to={RUTAS.nosotros}>QUIENES SOMOS</Link>
                      <Link to={RUTAS.servicios}>SERVICIOS</Link>
                      <Link to={RUTAS.consulta}>CONSULTA</Link>
                      <Link to={RUTAS.ayuda}>AYUDA</Link>
                    </nav>
                    <Route exact path={RUTAS.inicio} component={HomePage} />
                    <Route path={RUTAS.nosotros} component={WeArePage} />
                    <Route path={RUTAS.servicios} component={ServicesPage} />
                    <Route path={RUTAS.consulta} component={FormPage} />
                    <Route path={RUTAS.ayuda} component={HelpPage} />

                </Router>
            </div>
      );
    }

  export default Header;