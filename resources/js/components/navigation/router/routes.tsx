// React
import React from 'react';

import {lazy} from '@loadable/component';
import pMinDelay from 'p-min-delay';

// Typescript
import {IRoute} from './IRoute';
import Loader from '../../UI/Loader/Loader';

// Icons
import {
    Catalogs,
    Containers,
    Importers, Log,
    Orders,
    Products, Settings,
    Providers
} from '../../UI/iconComponents';

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
        fallback: <Loader/>,
        icon: <Orders/>
    },
    {
        name: 'Контейнеры',
        pageName: 'Список контейнеров',
        path: '/containers',
        component: lazy(() =>
            pMinDelay(import('../../../pages/containers/Containers'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Containers/>
    },
    {
        name: 'Каталоги',
        pageName: 'Список каталогов',
        path: '/catalogs',
        component: lazy(() =>
            pMinDelay(import('../../../pages/products/Products'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Catalogs/>
    },
    {
        name: 'Товары',
        pageName: 'Список оцифрованных товаров',
        path: '/products',
        component: lazy(() =>
            pMinDelay(import('../../../pages/products/Products'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Products/>
    },
    {
        name: 'Просмотр информации о товаре',
        path: '/product/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/products/Product'), 1000)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Поставщики',
        pageName: 'Список поставщиков',
        path: '/providers',
        component: lazy(() =>
            pMinDelay(import('../../../pages/providers/Providers'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Providers/>
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
        fallback: <Loader/>,
        icon: <Importers/>
    },
    {
        name: 'Просмотр информации об импортере',
        path: '/importer/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/Importer'), 1000)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Добавление нового импортера',
        path: '/importercreate',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/ImporterCreate'), 1000)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Импортер изменение',
        path: '/importeredit/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/ImporterEdit'), 1000)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Лог',
        path: '/log',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Log'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Log/>
    },
    {
        name: 'Настройки',
        path: '/settings',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Settings'), 1000)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Settings/>
    }
];
