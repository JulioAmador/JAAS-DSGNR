import React from "react";
import {useState} from "react";
import {Container, TextField} from "@material-ui/core";
import '../App.css'; 

function Footer () {
    const[mail, setMail]= useState('')
    const handleSendMail = () => {
        mail ?  alert("Gracias por Suscribirte"): alert("Algo salió mal al escribir tu correo")
        }
    return(
    <div className="Footer">
        <h3>Suscríbete</h3>
        <hr id="separador16"/>
        <form>
            <TextField 
            id="outlined-secondary" 
            type="email"
            className="Mail" noValidate
            variant="outlined"
            size="small"
            label="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
            error={!mail}/>
            <button 
            id="SmallFilledButton"
            onClick={handleSendMail}
            >SUSCRIBIRSE</button>
        </form>
    </div>
    );
}
    



export default Footer;