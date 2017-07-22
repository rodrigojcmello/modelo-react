import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Pagina1 = () => (
    <div>
        <h1>Página 1</h1>
        <Link to='pagina-2'>Página 2</Link>
    </div>
);

module.exports = Pagina1;
