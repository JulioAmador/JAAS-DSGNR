import React from "react";
import { useHistory } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";

const HomePage = () => {
    const history = useHistory();
    return (
        <>
            <div className="container">
                <Hero
                    breadCrums="Home/"
                    titleHero="Nos encargamos de tu marca"
                    textIntro="Somos una Agencia Digital enfocada en impulsar tu marca y tu negocio al éxito. Analizaremos tus necesidades para ofrecerte la solución indicada y brindarte el servicio que mereces."
                    type1="primary"
                    type2="outline"
                    children1="CONSÚLTANOS"
                    children2="SERVICIOS"
                    ctaBtn1 = {() => {
                        history.push('/consulta')}}
                    ctaBtn2 = {() => {
                        history.push('/servicios')}}
                />
                <Features/>
            </div>
        </>
    );

}


export default HomePage;