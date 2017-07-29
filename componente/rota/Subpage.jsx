import React, { Component } from 'react';
import AnimatedWrapper from './AnimatedWrapper';

class Subpage extends Component {
    render() {
        return (
            <div className='page'>
                <h1>Subpage</h1>
                <p>Hello from a sub page!</p>
            </div>
        );
    }
}

export default AnimatedWrapper(Subpage);
