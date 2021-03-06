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
        name: 'Заказы',
        pageName: 'Заказы',
        path: '/orders',
        component: lazy(() =>
            pMinDelay(import('../../../pages/orders/Orders'), 600)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Orders/>
    },
    {
        name: 'Просмотр информации о заказе',
        path: '/order/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/orders/Order'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Инициализация нового заказа',
        path: '/ordercreate',
        component: lazy(() =>
            pMinDelay(import('../../../pages/orders/OrderCreate'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Контейнеры',
        pageName: 'Список контейнеров',
        path: '/containers',
        component: lazy(() =>
            pMinDelay(import('../../../pages/containers/Containers'), 600)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Containers/>
    },
    {
        name: 'Просмотр информации о контейнере',
        path: '/container/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/containers/Container'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Добавление нового контейнера',
        path: '/containercreate',
        component: lazy(() =>
        pMinDelay(import('../../../pages/containers/ContainerCreate'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Каталоги',
        pageName: 'Список каталогов',
        path: '/catalogs',
        component: lazy(() =>
            pMinDelay(import('../../../pages/catalogs/Catalogs'), 600)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Catalogs/>
    },
    {
        name: 'Просмотр информации о каталоге',
        path: '/catalog/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/catalogs/Catalog'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Добавление нового каталога',
        path: '/catalogcreate',
        component: lazy(() =>
            pMinDelay(import('../../../pages/catalogs/CatalogCreate'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Товары',
        pageName: 'Список оцифрованных товаров',
        path: '/products',
        component: lazy(() =>
            pMinDelay(import('../../../pages/products/Products'), 600)),
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
            pMinDelay(import('../../../pages/products/Product'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Добавление нового товара',
        path: '/productcreate',
        component: lazy(() =>
            pMinDelay(import('../../../pages/products/ProductCreate'), 600)),
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
            pMinDelay(import('../../../pages/providers/Providers'), 600)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Providers/>
    },
    {
        name: 'Просмотр информации о поставщике',
        path: '/provider/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/providers/Provider'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Добавление нового поставщика',
        path: '/providercreate',
        component: lazy(() =>
            pMinDelay(import('../../../pages/providers/ProviderCreate'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Импортеры',
        pageName: 'Список импортеров',
        path: '/importers',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/Importers'), 600)),
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
            pMinDelay(import('../../../pages/importers/Importer'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Добавление нового импортера',
        path: '/importercreate',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/ImporterCreate'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Импортер изменение',
        path: '/importeredit/:id',
        component: lazy(() =>
            pMinDelay(import('../../../pages/importers/ImporterEdit'), 600)),
        hide: true,
        exact: false,
        private: true,
        fallback: <Loader/>
    },
    {
        name: 'Лог',
        path: '/log',
        component: lazy(() =>
            pMinDelay(import('../../../pages/Log'), 600)),
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
            pMinDelay(import('../../../pages/Settings'), 600)),
        hide: false,
        exact: false,
        private: true,
        fallback: <Loader/>,
        icon: <Settings/>
    }
];
