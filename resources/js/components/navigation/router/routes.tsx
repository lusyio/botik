// React
import React, {lazy} from 'react';

// Typescript
import {IRoute} from './IRoute';

export const routes: IRoute[] = [
    {
        name: 'Регистрация',
        path: '/signup',
        component: lazy(() => import('../../../pages/Signup')),
        hide: true,
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Логин',
        path: '/login',
        component: lazy(() => import('../../../pages/Login')),
        hide: true,
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Заказы',
        path: '/orders',
        component: lazy(() => import('../../../pages/Orders')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Контейнеры',
        path: '/containers',
        component: lazy(() => import('../../../pages/Containers')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Товары',
        path: '/products',
        component: lazy(() => import('../../../pages/Products')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Поставщики',
        path: '/suppliers',
        component: lazy(() => import('../../../pages/Suppliers')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Импортеры',
        path: '/importers',
        component: lazy(() => import('../../../pages/importers/Importers')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Лог',
        path: '/log',
        component: lazy(() => import('../../../pages/Log')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Настройки',
        path: '/settings',
        component: lazy(() => import('../../../pages/Settings')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>,
    }
];
