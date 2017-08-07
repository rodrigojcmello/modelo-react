import React, { Component } from 'react';
import update from 'immutability-helper';
import './style.sss';

class ListaArrastarSoltar extends Component {
    constructor(props) {
        super(props);
        this.item = [];
        this.state = {
            lista: [
                { texto: 'Texto 01', className: 'item', style: {} },
                { texto: 'Texto 02', className: 'item', style: {} },
                { texto: 'Texto 03', className: 'item', style: {} },
                { texto: 'Texto 04', className: 'item', style: {} },
                { texto: 'Texto 05', className: 'item', style: {} },
                { texto: 'Texto 06', className: 'item', style: {} },
                { texto: 'Texto 07', className: 'item', style: {} },
                { texto: 'Texto 08', className: 'item', style: {} },
                { texto: 'Texto 09', className: 'item', style: {} },
                // { texto: 'Texto 10', className: 'item', style: {} },
                // { texto: 'Texto 11', className: 'item', style: {} },
                // { texto: 'Texto 12', className: 'item', style: {} },
                // { texto: 'Texto 13', className: 'item', style: {} },
                // { texto: 'Texto 14', className: 'item', style: {} },
                // { texto: 'Texto 15', className: 'item', style: {} },
                // { texto: 'Texto 16', className: 'item', style: {} },
                // { texto: 'Texto 17', className: 'item', style: {} },
                // { texto: 'Texto 18', className: 'item', style: {} },
                // { texto: 'Texto 19', className: 'item', style: {} },
                // { texto: 'Texto 20', className: 'item', style: {} }
            ],
            teste: 'background'
        };
    }
    onTouchStart(event) {
        console.log('### touchStart');
        console.log('### event.type');
        console.log(event.type);
        event.preventDefault();
    }
    onTouchMove(index, event) {
        event.preventDefault();
        let pageY = event.touches[0].pageY;
        let targetTop =this.item[index].getBoundingClientRect().top;
        let targetHeight = this.item[index].offsetHeight;

        this.item.forEach((item, i) => {
            if (!item.isEqualNode(this.item[index])) {
                let itemTop = item.getBoundingClientRect().top;
                if (
                    targetTop < itemTop + targetHeight / 2 &&
                    targetTop > itemTop - targetHeight - 16 - targetHeight / 2 - 2
                ) {
                    this.state.lista = update( this.state.lista, { [i]: { className: { $set: 'item acima' } } });
                } else {
                    this.state.lista = update( this.state.lista, { [i]: { className: { $set: 'item' } } });
                }
            }
        });
        this.state.lista[index].style = {
            opacity: 0.4,
            position: 'absolute',
            top: (pageY - (targetHeight / 2)) + 'px'
        };
        this.setState({
            lista: this.state.lista
        });
    }
    onTouchEnd(index, event) {
        let ordem = 0;
        this.item.forEach((item, i) => {
            this.state.lista = update(this.state.lista, { [i]: {
                className: { $set: 'item' },
                style: { $set: {} }
            } });
            if (item.classList.contains('acima')) { ordem = i; }
        });

        let removido = this.state.lista.splice(index, 1);
        this.state.lista.splice(ordem, 0, removido[0]);

        this.setState({
            lista: this.state.lista
        });
    }
    endTeste() {
        console.log('### FINAL');
    }
    startTeste(event) {
        console.log('### startTeste');
        console.log(event);
        setTimeout(() => {
            this.item.forEach((item, i) => {
                this.state.lista = update(this.state.lista, { [i]: {
                    className: { $set: 'item' },
                    style: { $set: { color: 'red' } }
                } });
            });
            this.setState({
                lista: this.state.lista
            });
        }, 300);
    }
    render() {
        return (
            <div
                ref={ el => this.lista = el }
                className='lista-arrastar-soltar'
            >
                <button
                    onTouchStart={ this.startTeste.bind(this) }
                    onTouchEnd={ this.endTeste.bind(this) }
                >Pressionar!</button>
                <h1>{ this.state.teste }</h1>
                { this.state.lista.map((item, i) => {
                    return (
                        <div
                            className={ item.className }
                            key={ i }
                            ref={ item => this.item[i] = item }
                            onTouchEnd={ this.onTouchEnd.bind(this, i) }
                            onTouchMove={ this.onTouchMove.bind(this, i) }
                            style={ item.style }
                        >
                            { item.texto }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default ListaArrastarSoltar;
