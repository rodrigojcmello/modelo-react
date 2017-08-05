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
        console.log('### elementHeight');
        console.log(elementHeight);

        let lista = Array.prototype.slice.call(this.lista.getElementsByClassName('item'));
        lista.forEach((item, i) => {
            let top = item.getBoundingClientRect().top;
            if (top < elementTop && top + elementHeight - 25 > elementTop) {
                item.classList.add('acima');
                lista.forEach((item_2, i_2) => {
                    if (item === item_2) {
                        item_2.classList.remove('acima');
                    }
                });
            }
        });

        event.target.style.position = 'absolute';
        event.target.style.top = parseInt((pageY - (elementHeight / 2))) + 'px';
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
                            key={ i }
                            className='item'
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
