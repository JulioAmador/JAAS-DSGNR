import React from "react";
import {useState} from "react";
import Button from "./Button";
import '../css/Footer.css';
import {TextField, withStyles} from "@material-ui/core";

const CustomInput = withStyles({
    root: {
      "& .MuiInputBase-root": {
        backgroundColor: "trasparent",
        overflow: "hidden",
        borderRadius: "6px",
        color: "white"
      },
      "& .MuiFormLabel-root": {
        color: "#606060"
      },
      "& label.Mui-focused": {
        color: "#02ae9e"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#02ae9e"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "2px solid #02ae9e"
        },
        "&:hover fieldset": {
          border: "3px solid #42eadb"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#42eadb"
        }
      }
    }
  })(TextField);


export default function Footer() {
    const [mail, setMail] = useState('')
    const handleSendMail = () => {
        mail ?
        alert("Gracias por suscribirte")
        : 
        alert("Algo salio mal al escribir tu correo. Vuelve a intentarlo")
    }
    return (
        <>
            <div className="footer">
                <h3 className="fotter-title">Suscríbete</h3>
                <form>
                    <CustomInput 
                        className="form-input"
                        label="Correo"
                        variant="outlined"
                        type="email"
                        noValidate
                        size="small"
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />
                    <Button
                        type="primary"
                        className=""
                        children="SUSCRÍBETE"
                        onClick={handleSendMail}
                    />
                </form>
            </div>
        </>
    );
}

