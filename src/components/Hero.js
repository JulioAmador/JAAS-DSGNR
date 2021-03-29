import React from "react";
import {
    withRouter,
    BrowserRouter as Router,
    Link, 
    useHistory, 
    Switch} from "react-router-dom";
import {RUTAS} from "../assets/helpers/rutas"
import "../css/Hero.css";
import Button from "./Button";

 
const Hero = ({breadCrums, titleHero, textIntro, type1, type2, children1, children2,ctaBtn1, ctaBtn2,...props}) => {
    const history = useHistory();
    return (
        <div className="HeroContainer">
            <a className="BreadCrums" href={RUTAS.inicio}>
                {breadCrums}
            </a>
            <div className="HeroContent">
                <h1 className="HeroTitle">
                    <span className="HeroTitle-yellow">//</span>
                    {titleHero}
                    <span className="HeroTitle-yellow">//</span>
                </h1>
                <p className="HeroTextIntro">
                    {textIntro}
                </p>
                <Button
                    {...props}
                    onClick={ctaBtn1}
                    children={children1}
                    type={type1}
                />
                <Button
                    {...props}
                    onClick={ctaBtn2}
                    children={children2}
                    type={type2}
                />
            </div>
        </div>       
    );

}

export default Hero;