import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.fields = [];
    }
    onSubmit(event) {
        event.preventDefault();

        this.fields.forEach(field => {
            console.log(field.value);
        });
    }
    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this) }>
                <div className='field'>
                    <label>Nome</label>
                    <input
                        type='text'
                        ref={ el => this.fields['name'] = el }
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input
                        type='text'
                        ref={ el => this.fields['email'] = el }
                    />
                </div>
                <button>enviar</button>
            </form>
        );
    }
}

render(<App />, document.getElementById('app'));
