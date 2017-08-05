import React, { Component } from 'react';

class ListaItemTopo extends Component {
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
    posicionarItemTopo(index) {
        let removed = this.state.lista.splice(index, 1);
        this.state.lista.unshift(removed[0]);
        this.setState({ lista: this.state.lista });
    }
    render() {
        return (
            <div>
                { this.state.lista.map((item, i) => {
                    return (
                        <div
                            key={ i }
                            onClick={ this.posicionarItemTopo.bind(this, i) }
                        >
                            { item.texto }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default ListaItemTopo;
