import request from '@/config/axios';

export interface LoginParams {
  username: string;
  password: string;
  autoLogin?: boolean;
  type?: string;
};

export interface LoginResult {
  status?: string;
  type?: string;
};

/** 登录接口 POST /login */
export async function login(body: LoginParams) {
  return request<LoginResult>({
    url: '/login',
    method: 'POST',
    data: body
  });
}
