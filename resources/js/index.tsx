// React
import React from 'react';

// Third-party
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Router from './components/navigation/router/Router';
import {routes} from './components/navigation/router/routes';

// App
import Layout from './layout/Layout';
// import Header from './components/navigation/Header/Header';

const Index: React.FC<RouteComponentProps> = () => {
    return (
        <Layout>
            <Router routes={routes}/>
        </Layout>
    );
}

export default withRouter(Index);
