// React
import React from 'react';
import {NavLink} from 'react-router-dom';
import SvgSettings from '../../UI/iconComponents/Settings';
import SvgLogout from '../../UI/iconComponents/Logout';

// Styles
import classes from './Header.module.css'

const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <div>
                <NavLink to="/" className="mr-3">
                    <span className={classes.logo}>BOTIK</span>
                </NavLink>
            </div>
            <div className="d-flex">
                <NavLink to="settings" className="mr-3">
                    <SvgSettings/>
                </NavLink>

                <NavLink to="logout">
                    <SvgLogout/>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
