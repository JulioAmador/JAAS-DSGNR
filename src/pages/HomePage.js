import React from "react";
//import {Container} from "@material-ui/core";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Navigation, Switch} from 'react-router';
import {RUTAS} from "../helpers/rutas";
import Hero from "../components/Hero";
import image_homehero from "../images/image_homehero.png";
import { Container } from "@material-ui/core";
import Button from "../components/Button";
import FormPage from "../pages/FormPage";

function handleClick(props) {
   props.history.push('./consulta');
  }
  

function HomePage () {
    return(
                 
        <div>
            <Hero
            imageHero={image_homehero}
            titleHero="Nos encagamos de tu marca"
            textIntro="Somos un Agencia Digital enfocada en impulsar tu marca y tu negocio al éxito. Analizaremos tus necesidades para ofrecerte la solución indicada y brindarte el servicio que mereces."/>
            <div className="Contenedor">
                <Button 
                type="primary" 
                children="CONSÚLTANOS">
                    <Link to={RUTAS.consulta}>CONSULTA</Link>
                    </Button>
                <Button type="outline" children="IR A SERVICIOS"/>
            </div>
        </div>
    );

}

export default HomePage; 

