import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Pagina4 from './pagina4.jsx';
import Pagina5 from './pagina5.jsx';

const Pagina3 = (props) => (
    <div>
        <h1>Página 3</h1>
        <Link to='/pagina-3/pagina-4'>Página 4</Link>
        <Link to='/pagina-3/pagina-5'>Página 5</Link>
        <Router>
            <TransitionGroup>
                <CSSTransition
                    classNames='fading'
                    key={ props.location.pathname.split('/')[1] }
                    mountOnEnter={ true }
                    timeout={ 400 }
                    unmountOnExit={ true }
                >
                    <div className="WRAPPER">
                        <Switch location={ props.location } >
                            <Route
                                component={ Pagina4 }
                                exact
                                path='/pagina-3/pagina-4'
                            />
                            <Route
                                component={ Pagina5 }
                                path='/pagina-3/pagina-5'
                            />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Router>

    </div>
);

/* <Route path={`${props.match.url}/pagina-4`} component={ Pagina4 } />
<Route path={`${props.match.url}/pagina-5`} component={ Pagina5 } /> */

module.exports = Pagina3;
