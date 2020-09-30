// React
import React, {Suspense} from 'react';

// Third-party
import {Redirect, Route} from 'react-router-dom';

// Typescript
import {IRoute} from './IRoute';

const RouteWithSubRoutes: React.FC<IRoute> = (route => {
    /** Authenticated flag */
        // const authenticated: boolean = user.authenticated;
    const authenticated: boolean = true;
    return (
        <Suspense fallback={route.fallback}>
            <Route path={route.path} render={(props) => route.redirect
                ? <Redirect to={route.redirect}/>
                : route.private ?
                    (authenticated
                        ? route.component &&
                        <route.component name={route.pageName || route.name}
                            // @ts-ignore
                                         {...props} routes={route.routes}/>
                        : <Redirect to='/login'/>)
                    : route.component &&
                    <route.component name={route.pageName || route.name}
                        // @ts-ignore
                                     {...props} routes={route.routes}/>}
            />
        </Suspense>
    );
});

export default RouteWithSubRoutes;
