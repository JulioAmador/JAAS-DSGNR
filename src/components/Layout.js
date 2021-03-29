import React from "react";
import Header from "./Header";
import Footer from "./Footer";
/*import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import {RUTAS} from "../assets/helpers/rutas";
import HomePage from "../pages/HomePage";
import WeArePage from "../pages/WeArePage";
import ServicesPage from "../pages/ServicesPage";
import FormPage from "../pages/FormPage";
import HelpPage from "../pages/HelpPage";*/

const Layout = ({ children }) => {
    return(
        <>
            <Header />
                { children }
            <Footer/>
        </>
    );
}

export default Layout;