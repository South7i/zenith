import request from '@/config/axios';

export interface CurrentUser {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
  address?: string;
  phone?: string;
  notifyCount?: number;
  unreadCount?: number;
  country?: string;
  access?: string;
  geographic?: {
    province?: { label?: string; key?: string };
    city?: { label?: string; key?: string };
  };
};

/** 获取当前的用户 GET /currentUser */
export async function currentUser() {
  const res = await request<any, CurrentUser>({
    url: '/currentUser',
    method: 'GET'
  });
  return res as CurrentUser | undefined;
}
