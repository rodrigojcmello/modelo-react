import React, { Component } from 'react';

class HelloWorldClass extends Component {
    constructor(props) {
        super(props);
        // console.log(teste);
    }
    render() {
        return (
            <div>
                Hello { this.props.nome }! (Class)
            </div>
        );
    }
}

export default HelloWorldClass;