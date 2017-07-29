import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Pagina4 from './pagina4.jsx';
import Pagina5 from './pagina5.jsx';

const Rota = props => (
    <TransitionGroup>
        <CSSTransition
            classNames='fadingfasdfa'
            key={ props.location.pathname }
            mountOnEnter={ true }
            timeout={ 400 }
            unmountOnExit={ true }
        >
            <div className="WRAPPER2">
                <Switch location={ props.location } >
                    <Route
                        component={ Pagina4 }
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
);

const Pagina3 = props => (
    <div>
        <h1>Página 3</h1>
        <Link to='/pagina-3/pagina-4'>Página 4</Link><br />
        <Link to='/pagina-3/pagina-5'>Página 5</Link>
        <hr />
        <Rota location={ props.location } />
    </div>
);

module.exports = Pagina3;
