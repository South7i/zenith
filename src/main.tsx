import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import Router from '@/routes/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // TODO StrictMode 会将组件重复渲染
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);
