import React, { Component } from 'react';

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
        // TODO: Compensar a posição exata do touch
        console.log('### onTouchMove');
        console.log(event.touches[0] );
        console.log(event.touches[0].pageY);
        console.log('### getBoundingClientRect');
        console.log(event.target.getBoundingClientRect().top);
        let pageY = event.touches[0].pageY;
        let elementTop = event.target.getBoundingClientRect().top;
        let elementHeight = event.target.clientHeight;


        let lista = Array.prototype.slice.call(this.lista.getElementsByClassName('item'));
        console.log('### lista');
        console.log(lista);
        lista.forEach((item, i) => {
            let top = item.getBoundingClientRect().top;
            if (top < elementTop && top + 40 > elementTop) {
                item.style.background = 'red';
                item.style.marginTop = '40px';
            }
        });

        event.target.style.position = 'absolute';
        event.target.style.top = parseInt((pageY - (elementHeight / 2))) + 'px';
    }
    render() {
        return (
            <div ref={ el => this.lista = el }>
                { this.state.lista.map((item, i) => {
                    return (
                        <div
                            key={ i }
                            className='item'
                            // onTouchStart={ this.onTouchStart.bind(this) }
                            onTouchMove={ this.onTouchMove.bind(this) }
                            style={{
                                height: '40px',
                                border: '1px solid black',
                                width: '300px'
                            }}
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
