// React
import React from 'react';

import {lazy} from '@loadable/component'
import pMinDelay from 'p-min-delay'

// Typescript
import {IRoute} from './IRoute';
import Loader from '../../UI/Loader/Loader';

export const routes: IRoute[] = [
    {
        name: 'Регистрация',
        path: '/signup',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Signup'), 1000)),
        hide: true,
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Логин',
        path: '/login',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Login'), 1000)),
        hide: true,
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
    {
        name: 'Заказы',
        pageName: 'Заказы',
        path: '/orders',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Orders'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Контейнеры',
        pageName: 'Список контейнеров',
        path: '/containers',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Containers'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Каталоги',
        pageName: 'Список каталогов',
        path: '/catalogs',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Products'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Товары',
        pageName: 'Список оцифрованных товаров',
        path: '/products',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Products'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Поставщики',
        pageName: 'Список поставщиков',
        path: '/suppliers',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Suppliers'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Импортеры',
        pageName: 'Список импортеров',
        path: '/importers',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/Importers'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Импортер',
        path: '/importer/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/Importer'), 1000)),
        hide: true,
        exact: false,
        private: true,
        fallback: <div>Loading...</div>
    },
    {
        name: 'Добавление нового импортера',
        path: '/importer/create',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/ImporterCreate'), 1000)),
        hide: true,
        exact: false,
        private: true,
        fallback: <div>Loading...</div>
    },
    {
        name: 'Импортер изменение',
        path: '/importer/edit/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/ImporterEdit'), 1000)),
        hide: true,
        exact: false,
        private: true,
        fallback: <div>Loading...</div>
    },
    {
        name: 'Лог',
        path: '/log',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Log'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Настройки',
        path: '/settings',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Settings'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>
    }
];
