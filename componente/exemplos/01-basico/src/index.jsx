import React from 'react';
import { render } from 'react-dom';

import HelloWorldFunctional from './component/HelloWorldFunctional.jsx';
import HelloWorldClass from './component/HelloWorldClass.jsx';

const App = props => (
    <div>
        <HelloWorldFunctional nome='World' />
        <HelloWorldClass nome='World' />
    </div>
);

render(<App />, document.getElementById('app'));
