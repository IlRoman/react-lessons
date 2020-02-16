import React from 'react';
import UserForm from './UserForm';

const App = () => {
    return (
        <UserForm onSubmit={data => console.log(data)} />
    );
};

export default App;