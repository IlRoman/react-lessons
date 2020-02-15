import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

const user = [
    {
        name: 'Bob',
        age: 21,
        id: 'id-1'
    },
    {
        name: 'Tom',
        age: 18,
        id: 'id-2'
    },
    {
        name: 'Tad',
        age: 17,
        id: 'id-3'
    },
    {
        name: 'Petya',
        age: 25,
        id: 'id-4'
    },
    {
        name: 'Vova',
        age: 15,
        id: 'id-5'
    },
    {
        name: 'Kolya',
        age: 43,
        id: 'id-6'
    },
    {
        name: 'Oleg',
        age: 27,
        id: 'id-3'
    },
]

ReactDOM.render(<UsersList user={user} />, rootElem);
