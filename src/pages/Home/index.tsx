import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

function Home() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
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

    </>
  );
}

export default Home;
