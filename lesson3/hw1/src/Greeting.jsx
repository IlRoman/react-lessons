import React from 'react';
import './index.scss';

const age = date => {
    return new Date().getFullYear() - new Date(date).getFullYear();
}

const Greeting = props => {
    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${age(props.birthDate)} years old`}
        </div>
    )
}

export default Greeting;