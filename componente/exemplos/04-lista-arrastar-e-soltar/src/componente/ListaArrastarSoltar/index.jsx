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
                { texto: 'Texto 06', className: 'item', style: {} }
            ],
            teste: 'background'
        };
    }
    onTouchStart(event) {
        console.log('### touchStart');
        console.log('### event.type');
        console.log(event.type);
    }
    onTouchMove(index, event) {
        let pageY = event.touches[0].pageY;
        let elementTop = event.target.getBoundingClientRect().top;
        let elementHeight = event.target.offsetHeight;

        this.item.forEach((item, i) => {
            let top = item.getBoundingClientRect().top;
            if (top < elementTop && top + elementHeight - 25 > elementTop) {
                this.state.lista = update(this.state.lista, { [i]: { className: { $set: 'item acima' } } });
                this.item.forEach((item_2, i_2) => {
                    if (!item.isEqualNode(item_2)) {
                        this.state.lista = update(this.state.lista, { [i_2]: { className: { $set: 'item' } } });
                    }
                });
            }
        });
        // event.target.style.position = 'absolute';
        // event.target.style.top = parseInt((pageY - (elementHeight / 2))) + 'px';
        this.state.lista[index].style = {
            position: 'absolute',
            top: parseInt((pageY - (elementHeight / 2))) + 'px'
        };

        this.setState({
            lista: this.state.lista
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState != this.state) {
            return true;
        } else {
            return false;
        }
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
    render() {
        return (
            <div
                ref={ el => this.lista = el }
                className='lista-arrastar-soltar'
            >
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
