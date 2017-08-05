import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.field = [];
    }
    enviarFormulario(event) {
        event.preventDefault();

        this.formulario.getElementsByTagName('input');

        // let required = Array.prototype.slice.call(this.formulario.getElementsByClassName('required'));
        // required.forEach((fieldBox) => {
        //     if (!fieldBox.getElementsByTagName('input')[0].value) {
        //         // console.log('---');
        //         // console.log(fieldBox.dataset);
        //         // let updateStatus = fieldBox.dataset.updateStatus;
        //         // console.log(updateStatus);
        //     }
        // });
        // for (var i = 0; i < required.length; i++) {
        //     this.formulario.getElementsByClassName('required')[i].getElementsByTagName('input')[0].value;
        // }

        console.log('Formulário enviado!');
    }
    render() {
        let { children, props } = this.props;
        console.log('children');
        console.log(children);
        return (
            <form
                { ...props }
                ref={ (formulario) => { this.formulario = formulario; } }
                onSubmit={ this.enviarFormulario.bind(this) }
            >
                { children }
            </form>
        );
    }
}

export default Form;
