import React, {Fragment} from 'react';

import './OrderSummary.css';

const orderSummary = props =>{
    const ingredients = Object.keys(props.ingredients)
        .map(key=>{
            return  <li>
                        <span>{key}:</span> {props.ingredients[key]}
                    </li>
        })
    return(
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
        </Fragment>
    );
}

export default orderSummary;