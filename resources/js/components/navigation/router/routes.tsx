// React
import React, {lazy} from 'react';

// Typescript
import {IRoute} from './IRoute';
import Loader from '../../UI/Loader';

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
        fallback: <Loader/>
    },
    {
        name: 'Контейнеры',
        path: '/containers',
        component: lazy(() => import('../../../pages/Containers')),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Товары',
        path: '/products',
        component: lazy(() => import('../../../pages/Products')),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Поставщики',
        path: '/suppliers',
        component: lazy(() => import('../../../pages/Suppliers')),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Импортеры',
        path: '/importers',
        component: lazy(() => import('../../../pages/importers/Importers')),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Импортер',
        path: '/importers/:importerId',
        component: lazy(() => import('../../../pages/importers/Importer')),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Лог',
        path: '/log',
        component: lazy(() => import('../../../pages/Log')),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Настройки',
        path: '/settings',
        component: lazy(() => import('../../../pages/Settings')),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    }
];
