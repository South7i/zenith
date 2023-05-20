import {useRoutes} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from '@/pages/Home';
import Login from '@/pages/User/Login';

const routes = [
  {
    name: 'home',
    path: '/',
    auth: true,
    component: Home
  },
  {
    name: 'login',
    path: '/login',
    auth: false,
    component: Login
  },
  {
    path: '*',
    auth: false,
    component: lazy(() => import('@/pages/Error/NotFound'))
  }
];

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item:any) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = <Suspense fallback={
      <div>加载中...</div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      {
        (<item.component />)
      }
    </Suspense>;
    return item;
  });
};

const Router = () => useRoutes(generateRouter(routes));

export default Router;
