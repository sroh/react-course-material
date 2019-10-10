import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> Euro</p>
            {controls.map((ctrl, index) => {
                return <BuildControl 
                            key={index + ctrl.label} 
                            label={ctrl.label} 
                            add={() => props.add(ctrl.type)}
                            remove={() => props.remove(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}   />
            })};
            <button onClick={props.ordered} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;