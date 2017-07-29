import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Pagina6 from './pagina6.jsx';
import Pagina7 from './pagina7.jsx';

class Rota extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('### this.props.location PAGINA5');
        console.log(this.props.location);
        console.log('props');
        console.log(this.props);
        return (
            <TransitionGroup>
                <CSSTransition
                    classNames='fadingfasdfa'
                    key={ this.props.location.pathname }
                    mountOnEnter={ true }
                    timeout={ 400 }
                    unmountOnExit={ true }
                >
                    <div className="WRAPPER2">
                        <Switch location={ this.props.location } >
                            <Route
                                component={ Pagina6 }
                                path='/pagina-3/pagina-5/pagina-6'
                            />
                            <Route
                                component={ Pagina7 }
                                path='/pagina-3/pagina-5/pagina-7'
                            />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}
const Pagina5 = props => (
    <div>
        <h1>Página 5</h1>
        <Link to='/pagina-3/pagina-5/pagina-6'>Página 6</Link><br />
        <Link to='/pagina-3/pagina-5/pagina-7'>Página 7</Link>
        <hr />
        <Rota location={ props.location } />
    </div>
);

module.exports = Pagina5;
