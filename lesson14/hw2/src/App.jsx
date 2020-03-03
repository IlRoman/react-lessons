import React from 'react';
import Clock from './Clock';

const App = () => {
    return (
        <>
            <Clock location="Kiev" num={2} />
            <Clock location="New York" num={-5} />
            <Clock location="London" num={0} />
        </>
    );
};
export default App;