import React from "react";
import classes from "./Modal.css";

const modal = (props) => {
    return (
        <div className={classes.Modal} style={{
                transform: props.show === true ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show === true ? '1' : '0'
            }} >
            {props.children}
        </div>
    )
}

export default modal;