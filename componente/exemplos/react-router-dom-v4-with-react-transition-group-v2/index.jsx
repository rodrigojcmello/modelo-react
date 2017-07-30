import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Pagina1 from './componente/nivel-1/pagina1.jsx';
import Pagina2 from './componente/nivel-1/pagina2.jsx';
import Pagina3 from './componente/nivel-1/pagina3.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TransitionGroup>
                <CSSTransition
                    classNames='fade'
                    key={ this.props.location.pathname.split('/')[1] }
                    mountOnEnter={ true }
                    timeout={ 400 }
                    unmountOnExit={ true }
                >
                    <div className='WRAPPER'>
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
                                location={ this.props.location }
                                path='/pagina-3'
                            />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
};

const AppWithRouter = withRouter(App);

const Rota = (props) => (
    <Router>
        <AppWithRouter />
    </Router>
);

render(<Rota />, document.getElementById('app'));
