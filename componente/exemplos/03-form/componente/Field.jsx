import React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'ok'
        };
    }
    updateStatus(status) {
        this.setState({ 'status': status });
    }
    teste() {
        console.log('### OK');
    }
    render() {
        let { validation, label, ...props } = this.props;
        let message = '';
        if (this.state.status == 'pending') {
            message = (
                <div className='message' >
                    { validation }
                </div>
            );
        }
        return (
            <div
                className={ validation ? 'field required' : 'field' }
                data-updateStatus={ this.updateStatus.bind(this) }
                onInput={ this.teste.bind(this) }
            >
                <label>{ label }</label>
                <input { ...props } />
                { message }
            </div>
        );
    }
}

export default Field;
