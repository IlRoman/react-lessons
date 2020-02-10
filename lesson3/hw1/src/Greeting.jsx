import React from 'react';
import './index.scss';

function age(date) {
    let result = new Date() - new Date(date);
    return Math.round(result / 1000 / 60 / 60 / 24 / 365.25)

}

const Greeting = props => {
    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${age(props.birthDate)} years old`}
        </div>
    )
}

export default Greeting;