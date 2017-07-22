import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Pagina4 from './pagina4.jsx';

const Pagina3 = (props) => (
    <div>
        <h1>Página 3</h1>
        <Route path={`${props.match.url}/pagina-4`} component={ Pagina4 } />
    </div>
);

module.exports = Pagina3;
