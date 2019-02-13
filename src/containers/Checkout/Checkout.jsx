import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
class Checkout extends Component {
    state={
        ingredients: {
            salad: 1,
            bacon: 1,
            meat: 1,
            cheese: 1
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};
        for(let param of query.entries()){
            ingredient[param[0]] = +param[1];
        }
        
        this.setState({ingredients: ingredient});
    }
    render(){
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 cancel={this.cancelhandler}
                                 continue={this.continuehandler}/>
            </div>
        );
    }

    cancelhandler = ()=>{
        this.props.history.goBack();
    }

    continuehandler = ()=>{
        this.props.history.replace('/checkout/contact-data')
    }
}

export default Checkout;