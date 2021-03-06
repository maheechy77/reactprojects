import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label:'Cheese', type:'cheese'},
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'bacon', type:'bacon'},
];
const buildControls =(props) =>(
    <div className="BuildControls">
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() =>props.ingreAdd(ctrl.type)}
            sub={() =>props.ingresub(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button disabled={!props.purchasable} className="OrderButton" onClick={props.ordered} >ORDER NOW!!!</button>
    </div>
);
export default buildControls;