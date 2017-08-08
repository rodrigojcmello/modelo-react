import React, { Component } from 'react';

class HelloWorldClass extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { nome, ...resto } = this.props;
        return (
            <div>
                Hello { nome }! (Class) { resto.teste }
            </div>
        );
    }
}

export default HelloWorldClass;
