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
        {
            controls.map(ctrl =>(
                <BuiltControl key={ctrl.label} 
                              label={ctrl.label} 
                              addIngredients={()=>props.addIgredients(ctrl.type)}
                              removeIgredients={()=>props.removeIgredients(ctrl.type)}/>
            ))
        }
    </div>
);

export default buildControls;
