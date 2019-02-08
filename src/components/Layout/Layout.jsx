import React, {Fragment} from 'react'

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import './Layout.css';

const layout = props => (
    <Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>
        {props.children}
      </main>
    </Fragment>
);

export default layout;