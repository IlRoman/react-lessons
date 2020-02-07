import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './search.scss';
import Greeting from './search.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Greeting name="Tom" />, rootElem);