import React from "react";
import { useHistory } from "react-router-dom";



const Button = ({ type, className, children, ...props }) => {
    const history = useHistory();
    return (
        <button
        {...props}
        className={`btn btn-${
            type === "primary" || type === "secondary" || type === "outline"
            ? type
            : ""
        } ${className ? className : ""}`}
        >{children}
        </button>
    );
};

export default Button