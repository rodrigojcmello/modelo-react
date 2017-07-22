import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import Pagina1 from './componente/pagina1.jsx';
import Pagina2 from './componente/pagina2.jsx';
import Pagina3 from './componente/pagina3.jsx';

const App = () => (
    <Router>
        <TransitionGroup>
            <Route path='/pagina-1' component={ Pagina1 } />
            <Route path='/pagina-2' component={ Pagina2 } />
            <Route path='/pagina-3' component={ Pagina3 } />
        </TransitionGroup>
    </Router>
);

render(<App />, document.getElementById('app'));
