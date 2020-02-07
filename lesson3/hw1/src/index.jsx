import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const root = document.querySelector('.root');

ReactDOM.render(
    <Greeting
        firstName='John'
        lastName="Doe"
        age='17'
    />,
    root
);