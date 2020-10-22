// React
import React from 'react'
import PropTypes from 'prop-types'

// Third-party
import {Switch} from 'react-router'

// Typescript
import {IRoute} from './IRoute'

// App
import RouteWithSubRoutes from './RouteWithSubRoutes'
import {Redirect, Route} from 'react-router-dom'

interface IProps {
    routes: IRoute[];
}

const Router: React.FC<IProps> = ({routes}) => {
    return (
        <Switch>
            {routes.map((route: IRoute) =>
                <RouteWithSubRoutes key={route.path} {...route} />)}
            <Route exact path="/">
                <Redirect to="/main"/>
            </Route>
        </Switch>
    )
}

Router.propTypes = {
    routes: PropTypes.array.isRequired
}

export default Router
