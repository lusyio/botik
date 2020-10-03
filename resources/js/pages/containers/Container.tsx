// React
import React from 'react';

// App
import Header from '../../components/navigation/Header/Header';

const Container: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Container page</h1>
        </>
    );
}

export default Container;
