import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Profile';

const root = document.querySelector('#root');

const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
}

ReactDOM.render(<Greeting userInfo={userData} />, root);