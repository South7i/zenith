import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { useCurrentUser } from '@/hooks/useAccount';

function Home() {
  const { t, i18n } = useTranslation();

  const { data, isLoading, isFetching, error } = useCurrentUser();

  if (isLoading) return '用户信息 Loading...';

  if (error) return 'An error has occurred: ' + error;

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleGetUserInfo = () => {
    console.log(typeof data, data, isLoading, isFetching, error); // 输出用户信息到控制台
  };

  return (
    <>
      <div>
        <select
          style={{ width: '120px', height: '30px', fontSize: '16px' }}
          onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value='zh-CN'>简体中文</option>
          <option value='zh-TW'>繁体中文</option>
          <option value='en'>English</option>
          <option value='ja-JP'>日本語</option>
        </select>
      </div>

      <h1>{t('home')}</h1>

      <p>
        {t('currentTime', { time: dayjs()})}
      </p>

      <p>
        {t('day', { count: 3})}
      </p>

      <div>
        <button onClick={handleGetUserInfo}>打印用户信息</button>
      </div>

    </>
  );
}

export default Home;
