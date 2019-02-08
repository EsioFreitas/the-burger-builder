 import React from 'react'

 import BurgerIngredients from './BurgerIngredients/BurgesIngredients';

 import './Burger.css';

 const burger = props =>{
     let transformedIgredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredients key={igKey+i} type={igKey}/>
            });
        })
        .reduce((arr, el)=>{
            return arr.concat(el);
        }, []);

        if(transformedIgredients.length === 0)
            transformedIgredients = <p>Please start adding ingredients!</p>

     return(
        <div className='Burger'>
            <BurgerIngredients type='bread-top'/> 
            {transformedIgredients}
            <BurgerIngredients type='bread-bottom'/> 
        </div>
     );
 }

 export default burger;