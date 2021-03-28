import React from "react";
import {Link} from "react-router-dom";
import {RUTAS} from "../helpers/rutas";



const Hero = ({titleHero, textIntro, imageHero}) => {
    return(
    <div className="HeroContainer">
        <img className="HeroImage" src={imageHero}/>
        <div className="HeroContent">
            <Link className="BreadCrums" to={RUTAS.inicio}>JAAS - DSGNR{RUTAS.inicio}</Link>
            <div className="HeroTitle">
                <span className="HeroTitleYelow">//</span>
                {titleHero}
                <span className="HeroTitleYelow">//</span>
            </div>
            <p className="HeroTextIntro">{textIntro}</p>
        </div>
    </div>    
)}



export default Hero;