import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Pagina2 = () => (
    <div>
        <h1>Página 2</h1>
        <Link to='/pagina-1'>Página 1</Link><br />
        <Link to='/pagina-3'>Página 3</Link><br />
    </div>
);

module.exports = Pagina2;
