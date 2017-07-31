import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }
    enviarFormulario(event) {
        event.preventDefault();

        console.log(this.formulario);

        console.log('Formulário enviado!');
    }
    render() {
        return (
            <form
                { ...this.props }
                ref={ (formulario) => { this.formulario = formulario; } }
                onSubmit={ this.enviarFormulario.bind(this) }
            >
                { this.props.children }
            </form>
        );
    }
}

export default Form;
