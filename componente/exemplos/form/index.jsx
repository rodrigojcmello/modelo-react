import React from 'react';
import { render } from 'react-dom';

import Form from './componente/Form.jsx';
import Field from './componente/Field.jsx';

const App = props => (
    <Form>
        <Field
            type='text'
            name='nome'
            label='Nome'
            validation='Preencha seu nome'
        />
        <Field
            type='text'
            name='cidade'
            label='Cidade'
            validation='Em que cidade você mora?'
        />
        <button>Enviar</button>
    </Form>
);

render(<App />, document.getElementById('app'));
