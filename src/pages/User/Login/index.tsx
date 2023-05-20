import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('login')}</h1>
    </>
  );
}

export default Login;
