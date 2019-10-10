import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            {controls.map((ctrl, index) => {
                return <BuildControl 
                            key={index + ctrl.label} 
                            label={ctrl.label} 
                            add={() => props.add(ctrl.type)}
                            remove={() => props.remove(ctrl.type)}
                            />
            })};
        </div>
    );
}

export default buildControls;