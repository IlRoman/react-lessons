import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './index.scss';

import Greeting from './Search.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Greeting name="Tom" />, rootElem);