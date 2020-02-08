import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const root = document.querySelector('.root');

ReactDOM.render(
    <Greeting
        firstName='John'
        lastName="Doe"
        birthDate="1991-01-05T22:25:25.550Z"
    />,
    root
);