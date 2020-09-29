// React
import React from 'react';

// Third-party
import {withRouter} from 'react-router-dom';
import Router from './components/navigation/router/Router';
import {routes} from './components/navigation/router/routes';

// App
import Layout from './layout/Layout';

const Index: React.FC = () => {
    return (
        <Layout>
            <Router routes={routes}/>
        </Layout>
    );
}

export default withRouter(Index);
