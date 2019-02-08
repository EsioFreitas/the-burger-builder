 import React from 'react'

 import BurgerIngredients from './BurgerIngredients/BurgesIngredients';

 import './Burger.css';

 const burger = props =>{
     return(
        <div className='Burger'>
            <BurgerIngredients type='bread-top'/> 
            <BurgerIngredients type='salad'/> 
            <BurgerIngredients type='meat'/> 
            <BurgerIngredients type='bread-bottom'/> 
        </div>
     );
 }

 export default burger;