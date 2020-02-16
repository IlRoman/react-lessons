import React from 'react';
import UserForm from './UserForm';

const App = () => {
    return (
        <UserForm createUser={data => console.log(data)} />
    );
};

export default App;