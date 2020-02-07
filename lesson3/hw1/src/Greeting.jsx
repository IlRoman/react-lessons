import React from 'react';

const Greeting = props => {
    return (
        <div>
            {`My name is ${props.firstName} ${props.lastName}. I'm ${props.age} years old`}
        </div>
    )
}

export default Greeting;

// const Greeting = props => {
//     return (
//         <header className="greeting">
//             {`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthDate)} years old`}
//         </header>
//     )
// };