import React, {Fragment} from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar'

import './Layout.css';

const layout = props => (
    <Fragment>
      <Toolbar/>
      <main className='Content'>
        {props.children}
      </main>
    </Fragment>
);

export default layout;