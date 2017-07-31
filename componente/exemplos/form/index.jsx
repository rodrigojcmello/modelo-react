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
            validation={ true }
            notification='Preencha seu nome'
        />
    </Form>
);

render(<App />, document.getElementById('app'));
