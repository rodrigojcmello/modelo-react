import React from 'react';
import { render } from 'react-dom';

import HelloWorldFunctional from './componente/HelloWorldFunctional.jsx';
import HelloWorldClass from './componente/HelloWorldClass.jsx';

const App = props => (
    <div>
        <HelloWorldFunctional nome='World' />
        <HelloWorldClass nome='World' />
    </div>
);

render(<App />, document.getElementById('app'));
