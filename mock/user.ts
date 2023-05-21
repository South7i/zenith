import Mock from 'mockjs';

Mock.setup({
  timeout: '500-1000' // 设置延时时间范围，单位为毫秒
});

const baseUrl = '/api';

Mock.mock(`${baseUrl}/currentUser`, 'get', {
  code: 200,
  status: 'success',
  msg: '获取用户信息成功',
  data: {
    'id|+1': 1,
    name: '@cname',
    avatar: '@image(200x200)',
    email: '@email',
    address: '@city',
    phone: '@phone'
  }
});
