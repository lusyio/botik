// React
import React from 'react';

// Styles
import classes from './Header.module.css'
import Helmet from 'react-helmet';

const Header: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Тайтл</title>
            </Helmet>
            <div className={classes.header}>
                <h1>Заголовок страницы</h1>
            </div>
        </>
    );
}

export default Header;
