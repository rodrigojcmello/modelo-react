import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Pagina1 = () => (
    <div>
        <h1>Página 1</h1>
        <Link to='/pagina-2'>Página 2</Link><br />
        <Link to='/pagina-3'>Página 3</Link><br />
    </div>
);

module.exports = Pagina1;
