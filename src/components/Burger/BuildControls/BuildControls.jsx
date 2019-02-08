import React from 'react'

import BuiltControl from './BuildControl/BuildControl';

import './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
    { label: 'Cheese', type: 'cheese'},
]
const buildControls = props =>(
    <div className='BuildControls'>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl =>(
                <BuiltControl key={ctrl.label} 
                              label={ctrl.label} 
                              addIngredients={()=>props.addIgredients(ctrl.type)}
                              removeIgredients={()=>props.removeIgredients(ctrl.type)}
                              disableInfo={props.disableInfo[ctrl.type]}/>
            ))
        }
        <button className='OrderButton'
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;
