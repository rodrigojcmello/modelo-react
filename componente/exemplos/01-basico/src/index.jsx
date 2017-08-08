import React from 'react';
import { render } from 'react-dom';

import HelloWorldFunctional from './component/HelloWorldFunctional.jsx';
import HelloWorldClass from './component/HelloWorldClass.jsx';

if (process.env.NODE_ENV == 'production') {
    console.log = () => {};
}

const App = props => (
    <div>
        <HelloWorldFunctional nome='World' />
        <HelloWorldClass nome='World' teste="teste 123" />
    </div>
);

render(<App />, document.getElementById('app'));
