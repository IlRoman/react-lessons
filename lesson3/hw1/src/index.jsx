import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const greeting = document.querySelector('.greeting');

ReactDOM.render(
    <Greeting
        firstName='John'
        lastName="Doe"
        age='17'
    />,
    greeting
);