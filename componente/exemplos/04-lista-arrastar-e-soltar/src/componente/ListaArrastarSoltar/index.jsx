import React, { Component } from 'react';
import './style.sss';

class ListaArrastarSoltar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [
                { texto: 'Texto 01' },
                { texto: 'Texto 02' },
                { texto: 'Texto 03' },
                { texto: 'Texto 04' },
                { texto: 'Texto 05' },
                { texto: 'Texto 06' }
            ]
        };
    }
    onTouchStart(event) {
        console.log('### touchStart');
        console.log('### event.type');
        console.log(event.type);
    }
    onTouchMove(event) {
        let pageY = event.touches[0].pageY;
        let elementTop = event.target.getBoundingClientRect().top;
        let elementHeight = event.target.offsetHeight;
        let lista = Array.prototype.slice.call(this.lista.getElementsByClassName('item'));
        lista.forEach((item, i) => {
            let top = item.getBoundingClientRect().top;
            if (top < elementTop && top + elementHeight - 25 > elementTop) {
                item.classList.add('acima');
                lista.forEach((item_2) => {
                    if (!item.isEqualNode(item_2)) {
                        item_2.classList.remove('acima');
                    }
                });
            }
        });
        event.target.style.position = 'absolute';
        event.target.style.top = parseInt((pageY - (elementHeight / 2))) + 'px';
    }
    onTouchEnd(index, event) {
        let removido = this.state.lista.splice(index, 1);
        let ordem = this.lista.getElementsByClassName('acima')[0].dataset.ordem;
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
                { this.state.lista.map((item, i) => {
                    return (
                        <div
                            className='item'
                            key={ i }
                            data-ordem={ i }
                            onTouchEnd={ this.onTouchEnd.bind(this, i) }
                            onTouchMove={ this.onTouchMove.bind(this) }
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
