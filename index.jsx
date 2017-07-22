import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Pagina1 from './componente/pagina1.jsx';
import Pagina2 from './componente/pagina2.jsx';
import Pagina3 from './componente/pagina3.jsx';

import './postcss/teste.sss';

const MyTransition = (props) => (
    <Transition {...props}>
        {transitionState => React.cloneElement(props.children, {
            style: getStyleForTransitionState(transitionState)
        })}
    </Transition>
);



const MyList = () => (
    <TransitionGroup>
        { items.map(item => (  <MyTransition>{ item }</MyTransition> )) }
    </TransitionGroup>
);

const Fade = (props) => (
    <CSSTransition
        in={ true }
        exit={ true }
        timeout={ 5000 }
        classNames='fade'
        >
            { props.children }
    </CSSTransition>
);

class Pagina1Fade extends Component {
    constructor(props) {
        super(props);
        // this.state= { show: false };
        // setInterval(() => {
        //     this.setState({ show: !this.state.show });
        // }, 1000);
    }
    render() {
        return (
            <Fade in={ true }>
                <Pagina1 />
            </Fade>
        );
    }
}

const TransitionedPage = (WrappedComponent) => {
    const TransitionedComponent = (props) => (
        <Fade { ...props }>
            { React.cloneElement(<WrappedComponent />) }
        </Fade>
    );
    return TransitionedComponent;
};

const App = () => (
    <Router>
        <TransitionGroup>
            <Route path='/pagina-1' component={ TransitionedPage(Pagina1) } />
            <Route path='/pagina-2' component={ TransitionedPage(Pagina2) } />
            <Route path='/pagina-3' component={ TransitionedPage(Pagina3) } />
        </TransitionGroup>
    </Router>
);

render(<App />, document.getElementById('app'));
