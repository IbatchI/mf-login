import { LazyExoticComponent, lazy } from 'react'

type JSXComponents = () => JSX.Element
export interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponents> | JSXComponents
  name: string
  needAuth: boolean
}

const LoginPage = lazy(
  () => import(/* webpackChunkName: "LoginPage" */ '../pages/Login'),
) as LazyExoticComponent<JSXComponents>

const LoginPage2 = lazy(
  () => import(/* webpackChunkName: "LoginPage" */ '../pages/LoginPage2'),
) as LazyExoticComponent<JSXComponents>

const Detail = lazy(
  () => import(/* webpackChunkName: "LoginPage" */ '../pages/Detail'),
) as LazyExoticComponent<JSXComponents>

export const routes = [
  {
    path: '/login',
    name: 'Login',
    Component: LoginPage,
    needAuth: false,
  },
  {
    path: '/loginPage',
    name: 'Login Page 2',
    Component: LoginPage2,
    needAuth: false,
  },
  {
    path: '/detail',
    name: 'Login Page detail',
    Component: Detail,
    needAuth: true,
  },
] as const

export default routes
