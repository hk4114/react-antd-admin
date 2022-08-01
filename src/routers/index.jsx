import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '@/components/Layout'
import lazyLoad from '@/components/Loading/lazyLoad'
import Home from '@/pages/Home'

// 路由表 根据需要进行拆分
// https://reactrouter.com/docs/en/v6

export const rootRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        meta: {
          title: '首页',
          key: 'home'
        }
      },
      {
        path: '/abouts',
        element: lazyLoad(React.lazy(() => import('@/pages/About/index'))),
        meta: {
          title: '其他',
          key: 'validateForm'
        }
      }
    ]
  },
  {
    path: '/about',
    element: lazyLoad(React.lazy(() => import('@/pages/About/index'))),
    meta: {
      title: 'About',
      key: 'about'
    }
  },
  {
    path: '/404',
    element: lazyLoad(React.lazy(() => import('@/components/ErrorPage/index'))),
    meta: {
      requiresAuth: false,
      title: '404页面',
      key: '404'
    }
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
