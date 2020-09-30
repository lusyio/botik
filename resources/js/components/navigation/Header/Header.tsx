// React
import React from 'react';

// Styles
import classes from './Header.module.css'

const Header: React.FC = () => {
    return (
        <>
            <div className={classes.header}>
                <h1>Заголовок страницы</h1>
            </div>
        </>
    );
}

export default Header;
