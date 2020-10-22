// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Layout.module.css'

// App
import Header from '../components/navigation/Header/Header';

const Layout: React.FC = (props) => {
    return (
        <div className={classes.Layout}>
            <div className="container mt-4">
                <Header/>
                <main role='main' className="pt-2">
                        {props.children}
                </main>
            </div>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
