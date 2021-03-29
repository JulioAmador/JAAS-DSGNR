import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import { RUTAS } from "./assets/helpers/rutas";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import WeArePage from "./pages/WeArePage";
import ServicesPage from "./pages/ServicesPage";
import FormPage from "./pages/FormPage";
import HelpPage from "./pages/HelpPage";
//import './App.css';

const App = ()=> {
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
