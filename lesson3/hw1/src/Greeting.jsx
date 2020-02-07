import React from 'react';

const Greeting = props => {
    return (
        <div>
            <h1>
                {`My name is ${props.firstName} ${props.lastName}. I'm ${props.age} years old`}
            </h1>
        </div>
    )
}

export default Greeting;