// React
import React from 'react';

// App
import Header from '../components/navigation/Header/Header';

const Settings: React.FC = ({name}: any) => {
    return (
        <>
            <Header name={name}/>
            <h1>Settings page</h1>
        </>
    );
}

export default Settings;
