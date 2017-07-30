import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// );
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('### HOME');
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${ match.url }/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${ match.url }/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${ match.url }/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route component={ TransitionRouteLevel2 }/>
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{ match.params.topicId }</h3>
    </div>
);

const Auth = () => (
    <div>
        Você está autenticado!
    </div>
);

const TransitionRouteLevel2 = ({ location, match, props }) => (
    <TransitionGroup>
        <CSSTransition
            classNames='fade'
            key={ location.pathname.split('/')[1] + '/' + location.pathname.split('/')[2] }
            mountOnEnter={ true }
            timeout={ 400 }
            unmountOnExit={ true }
        >
            <div className='WRAPPER'>
                <Switch location={ location } >
                    <Route path={`${ match.url }/:topicId`} component={ Topic }/>
                    <Route exact path={ match.url } render={ () => (
                        <h3>Please select a topic.</h3>
                    ) }/>
                </Switch>
            </div>
        </CSSTransition>
    </TransitionGroup>
);

const TransitionRoute = ({ location, props }) => (
    <TransitionGroup>
        <CSSTransition
            classNames='fade'
            key={ location.pathname.split('/')[1] }
            mountOnEnter={ true }
            timeout={ 400 }
            unmountOnExit={ true }
        >
            <div className='WRAPPER'>
                <Switch location={ location } >
                    <Route exact path='/' component={ Home } />
                    <Route path='/home' component={ Home } />
                    <Route path='/about' component={ About } />
                    <AuthRoute path='/topics' component={ Topics } />
                    <AuthRoute path='/auth' component={ Auth } />
                </Switch>
            </div>
        </CSSTransition>
    </TransitionGroup>
);

class AuthRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('AUTH this.props.location');
        console.log(this.props.location);
        if (!true) {
            console.log('TRUE');
            return (
                <Route { ...this.props } />
            );
        } else {
            console.log('FALSE');
            return (
                <Redirect to='/home' />
            );
        }
    }
}

// const AuthRoute = props => (
//     <div>
//         { !true ? <Route { ...props } /> : <Redirect to='/' /> }
//     </div>
// );

class BasicExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('BasicExample');
        console.log(this.props);
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                        <li>
                            <Link to="/auth">Auth</Link>
                        </li>
                    </ul>

                    <hr/>
                    <Route component={ TransitionRoute } />
                </div>
            </Router>
        );
    }
}

render(<BasicExample/>, document.getElementById('app'));
