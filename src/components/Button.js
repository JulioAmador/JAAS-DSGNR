import React from "react";

const Button = ({type, className, children, ...props}) => {
    
    return (
        <button
        {...props}
        className={`btn btn-${
            type === "primary" || type === "secondary" || type === "outline"
            ? type
            : "no-btn"
        } ${className ? className : ""}`}
        >{children}
        </button>
    );
};


export default Button;