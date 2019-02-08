import React, {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger';

import './BurgerBuilder.css';

class BurgerBuilder extends Component {
    render(){
        return(
            <Fragment>
                <Burger/>
                <div>Builder Controls</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;