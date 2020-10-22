// React
import React from 'react';

import {lazy} from '@loadable/component';
import pMinDelay from 'p-min-delay';

// Typescript
import {IRoute} from './IRoute';
import Loader from '../../UI/Loader/Loader';

// Icons
import {
    Orders,
    Settings,
} from '../../UI/iconComponents';

export const routes: IRoute[] = [
    {
        name: 'Регистрация',
        path: '/signup',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Signup'), 600)),
        hide: true,
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Логин',
        path: '/login',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Login'), 600)),
        hide: true,
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Рабочий стол',
        pageName: 'Рабочий стол',
        path: '/main',
        component: lazy(() =>
            pMinDelay(import('../../../pages/main/Main'), 600)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Orders/>
    },
    {
        name: 'Настройки',
        path: '/settings',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Settings'), 600)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Settings/>
    }
];
