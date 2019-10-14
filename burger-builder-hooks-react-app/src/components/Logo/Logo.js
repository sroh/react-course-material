import React from "react";
// how to load images
import appLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => {
    return (
        <div className={classes.Logo} >
            <img src={appLogo} alt="burger-app-logo"/>
        </div>
    );
};

export default logo;