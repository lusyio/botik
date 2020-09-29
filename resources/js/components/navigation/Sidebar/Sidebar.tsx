// React
import React from 'react';

// Third-party
import {NavLink} from 'react-router-dom';

// Styles
import classes from './Sidebar.module.css'
import {routes} from '../router/routes';


const Sidebar: React.FC = () => {
    const renderLinks = routes => {
        return routes.map((route, index) => (
            !route.hide
                ?
                <NavLink key={index} to={route.path}
                         className={classes.navLink}
                         activeClassName={classes.active}
                         exact={route.exact}>
                    {route.name}
                </NavLink>
                : null
        ))
    }
    return (
        <nav className={classes.sidebar + ' nav flex-column'}>
            {renderLinks(routes)}
        </nav>
    );
}

export default Sidebar;
