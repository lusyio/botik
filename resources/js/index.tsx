// React
import React from 'react';

// Third-party
import {Route, Switch, withRouter} from 'react-router-dom';

// App
import Layout from './layout/Layout';
import Main from './pages/Main';

const Index: React.FC = () => {
    const routes = (
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
    )

    return (
        <Layout>
            {routes}
        </Layout>
    );
}

export default withRouter(Index);
