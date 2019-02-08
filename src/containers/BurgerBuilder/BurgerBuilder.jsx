import React, {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Moda';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import './BurgerBuilder.css';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchasableState(ingredients){
        const sum = Object.keys(ingredients).map(key=>{
            return ingredients[key];
        })
        .reduce((sum, el) =>{
            return sum + el;
        },0);

        this.setState({purchasable: sum>0});
    }
    
    render(){
        const disable = {...this.state.ingredients}
        for(let key in disable)
            disable[key] = disable[key] <= 0;
        return(
            <Fragment>
                <Modal show={this.state.purchasing} closeModal={this.closePurchasingHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuilderControls addIgredients={this.addIgredients}
                                 removeIgredients={this.removeIgredients}
                                 disableInfo={disable}
                                 price={this.state.totalPrice}
                                 purchasable={this.state.purchasable}
                                 ordered={this.purchasingHandler}/>
            </Fragment>
        );
    }

    purchasingHandler = () => {
        this.setState({purchasing : true});
    }

    closePurchasingHandler = () => {
        this.setState({purchasing : false});
    }

    addIgredients = (type) =>{
        const aldCont = this.state.ingredients[type];
        const newCont = aldCont+1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = newCont;

        const priceAdd = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchasableState(updateIngredients);
    }

    removeIgredients = (type) =>{
        const aldCont = this.state.ingredients[type];
        if(aldCont <= 0) return;
        const newCont = aldCont-1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = newCont;

        const priceAdd = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAdd;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchasableState(updateIngredients);
    }
}

export default BurgerBuilder;