// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Layout.module.css'

// App
import Header from '../components/navigation/Header/Header';
import Footer from '../components/navigation/Footer/Footer';

const Layout: React.FC = (props) => {
    return (
        <div className={classes.Layout}>
            <Header/>
            <main role="main">
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;
