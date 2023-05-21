import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from '@/routes';
import '@/config/i18n';
import '../mock';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 如果用户在短暂离开后回来时，数据已被标记为过时，那么 React Query 会在后台自动为你请求新的数据
      refetchOnWindowFocus: false,
      // 查询重试
      retry: false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // TODO StrictMode 会将组件重复渲染
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
