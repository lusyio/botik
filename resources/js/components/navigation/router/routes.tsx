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
        exact: true,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Контейнеры',
        path: '/containers',
        component: lazy(() => import('../../../pages/Containers')),
        hide: false,
        exact: true,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Товары',
        path: '/Products',
        component: lazy(() => import('../../../pages/Products')),
        hide: false,
        exact: true,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Поставщики',
        path: '/Suppliers',
        component: lazy(() => import('../../../pages/Suppliers')),
        hide: false,
        exact: true,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Импортеры',
        path: '/importers',
        component: lazy(() => import('../../../pages/Importers')),
        hide: false,
        exact: false,
        private: true,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Лог',
        path: '/Log',
        component: lazy(() => import('../../../pages/Log')),
        hide: false,
        exact: true,
        private: true,
        fallback: <div> Loading... </div>,
    },
    {
        name: 'Настройки',
        path: '/Settings',
        component: lazy(() => import('../../../pages/Settings')),
        hide: false,
        exact: true,
        private: true,
        fallback: <div> Loading... </div>,
    }
];
