// React
import React from 'react';
import PropTypes from 'prop-types';

// Third-party
import {Switch} from 'react-router';

// Typescript
import {IRoute} from './IRoute';

// App
import RouteWithSubRoutes from './RouteWithSubRoutes';

interface IProps {
    routes: IRoute[];
}

const Router: React.FC<IProps> = ({routes}) => {
    return (
        <Switch>
            {routes.map((route: IRoute) =>
                <RouteWithSubRoutes key={route.path} {...route} />)}
        </Switch>
    );
};

Router.propTypes = {
    routes: PropTypes.array.isRequired
}

export default Router;
