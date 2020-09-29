import {ComponentType, LazyExoticComponent, ReactNode} from 'react';

export interface IRoute {
    name: string;
    path: string;
    hide: boolean;
    exact: boolean;
    fallback: NonNullable<ReactNode> | null;
    component?: LazyExoticComponent<ComponentType<any>>;
    routes?: IRoute[];
    redirect?: string;
    private?: boolean;
}
