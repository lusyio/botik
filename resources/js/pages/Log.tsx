// React
import React from 'react';

// Typescript
import Header from '../components/navigation/Header/Header';

const Log: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Log page</h1>
        </>
    );
}

export default Log;
