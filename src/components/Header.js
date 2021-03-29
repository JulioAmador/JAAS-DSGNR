import React from "react";
import {
    BrowserRouter as Router, 
//    useHistory,
    Link,
//    Switch,
    Route
} from "react-router-dom";
import { RUTAS } from "../assets/helpers/rutas";
import HomePage from "../pages/HomePage";
import WeArePage from "../pages/WeArePage";
import ServicesPage from "../pages/ServicesPage";
import FormPage from "../pages/FormPage";
import HelpPage from "../pages/HelpPage";
import logohome from "../assets/images/logohome.svg";
import "../css/Header.css";

const Header = () => {
    return(
        <>
            <Router>
                <header className="header">
                    <a href={RUTAS.inicio}>
                        <img className="nav-logo" src={logohome} alt="Logo Brand"/>
                    </a>
                    <nav className="header-nav">
                        <Link className="header-nav-link" to = {RUTAS.nosotros}>QUIENES SOMOS</Link>
                        <Link className="header-nav-link" to = {RUTAS.servicios}>SERVICIOS</Link>
                        <Link className="header-nav-link" to = {RUTAS.consulta}>CONSULTA</Link>
                        <Link className="header-nav-link" to = {RUTAS.ayuda}>AYUDA</Link>
                    </nav>
                </header>
                <body className="">
                    <Route exact path = {RUTAS.inicio} component = { HomePage } />
                    <Route path = {RUTAS.nosotros} component = { WeArePage } />
                    <Route path = {RUTAS.servicios} component = { ServicesPage } />
                    <Route path = {RUTAS.consulta} component = { FormPage } />  
                    <Route path = {RUTAS.ayuda} component = { HelpPage } />
                </body>
            </Router>   
        </>
    );
}

export default Header;