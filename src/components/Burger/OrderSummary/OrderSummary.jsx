import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button'

import './OrderSummary.css';

const orderSummary = props =>{
    const ingredients = Object.keys(props.ingredients)
        .map(key=>{
            return  <li>
                        <span style={{textTransform: 'capitalize'}}>{key}:</span> {props.ingredients[key]}
                    </li>
        })
    return(
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <Button btnType='Danger' clicked={props.cancelButton}>CANCEL</Button>
            <Button btnType='Success' clicked={props.successButton}>SUCCESS</Button>
        </Fragment>
    );
}

export default orderSummary;