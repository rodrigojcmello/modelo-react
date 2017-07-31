import React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state.status = 'pending';
    }
    render() {
        let { validation, label, notification, ...props } = this.props;
        return (
            <div className={ validation ? 'with-validation' : '' } >
                <label>{ label }</label>
                <input { ...props } />
                <div className='notification' >
                    { notification }
                </div>
            </div>
        );
    }
}

export default Field;
