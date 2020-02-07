import React from 'react';
import './index.scss';

const Greeting = props => {
    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${props.age} years old`}
        </div>
    )
}

export default Greeting;