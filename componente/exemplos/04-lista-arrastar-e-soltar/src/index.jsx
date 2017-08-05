import React from 'react';
import { render } from 'react-dom';

import ListaItemTopo from './componente/ListaItemTopo.jsx';
import ListaArrastarSoltar from './componente/ListaArrastarSoltar.jsx';

const App = props => (
    <div>
        {/* <h2>Lista Item Topo</h2>
        <ListaItemTopo /> */}
        <h2>Lista Arrastar e Soltar</h2>
        <ListaArrastarSoltar />
    </div>
);

render(<App />, document.getElementById('app'));