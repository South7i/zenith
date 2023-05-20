import React, { useEffect } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';

export default function NotFound(): React.ReactElement {
  // 获取路由对象
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, location.pathname);
  useEffect(() => {
    console.log('渲染完毕');
  }, []);
  return (
    <>
      <div className='NotFount'>
            您输入的地址栏未找到匹配的页面
      </div>
      <br />
      <button onClick={() => navigate('/', { replace: true }) }>回到首页</button>
    </>
  );
}
