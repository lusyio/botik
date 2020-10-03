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
                <div>
                <h1>{name ? name : 'Название страницы'}</h1>
                </div>
                <div className="d-flex">
                    <span className={classes.HeaderBlockUserPic}>И</span>
                    <div className={classes.HeaderBlockUserNameRole}>
                        {/* eslint-disable-next-line max-len */}
                        <span className={classes.HeaderBlockUserName}>Иванов И.И.</span>
                        {/* eslint-disable-next-line max-len */}
                        <span className={classes.HeaderBlockUserRole}>Администратор</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
