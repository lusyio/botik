// React
import React from 'react';

// Styles
import classes from './Header.module.css'

interface IHeader {
    name: any
}

const Header: React.FC<IHeader> = ({name}) => {
    return (
        <>
            <div className={classes.header}>
                <h1>{name ? name : 'Название страницы'}</h1>
            </div>
        </>
    );
}

export default Header;
