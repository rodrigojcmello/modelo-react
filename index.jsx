import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Pagina1 from './componente/pagina1.jsx';
import Pagina2 from './componente/pagina2.jsx';
import Pagina3 from './componente/pagina3.jsx';

import './postcss/teste.sss';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <TransitionGroup>
                    <CSSTransition
                        classNames='fading'
                        key={ this.props.location.pathname.split('/')[1] }
                        mountOnEnter={ true }
                        timeout={ 400 }
                        unmountOnExit={ true }
                    >
                        <div className="WRAPPER">
                            <Switch location={ this.props.location } >
                                <Route
                                    component={ Pagina1 }
                                    exact
                                    path='/pagina-1'
                                />
                                <Route
                                    component={ Pagina2 }
                                    path='/pagina-2'
                                />
                                <Route
                                    component={ Pagina3 }
                                    path='/pagina-3'
                                />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Router>
        );
    }
};

App = withRouter(App);

const Rota = (props) => (
    <Router>
        <App />
    </Router>
);

render(<Rota />, document.getElementById('app'));
