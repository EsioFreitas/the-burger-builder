import React from 'react'

import './BuildControl.css';

const buildControl = props =>(
    <div className='BuildControl'>
       <div className='Label'>{props.label}</div>
       <button className='Less' onClick={props.removeIgredients} disabled={props.disableInfo}>Less</button> 
       <button className='More' onClick={props.addIngredients}>More</button> 
    </div>
);

export default buildControl;