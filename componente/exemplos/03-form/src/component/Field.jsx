import React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'ok',
            field: []
        };
        this.field = [];
    }
    updateStatus(status) {
        this.setState({ 'status': status });
    }
    validateField() {

    }
    render() {
        let { validation, name, label, ...props } = this.props;
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
            >
                <label>{ label }</label>
                <input
                    { ...props }
                    ref={ element => this.field[name] = element }
                />
                { message }
            </div>
        );
    }
}

export default Field;
