
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import dayjs from 'dayjs';

i18n
  .use(Backend)
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: ['zh-TW'],
    supportedLngs: [ 'zh-CN', 'zh-TW', 'en', 'ja-JP'], // 支持的语言列表
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}.json' // 语言资源文件的路径
    }
  });

i18n.services.formatter?.add('DD/MM/YY', (value, lng, options) => {
  return dayjs(value).format('DD/MM/YY');
});

i18n.services.formatter?.add('YYYY-MM-DD', (value, lng, options) => {
  return dayjs(value).format('YYYY-MM-DD');
});

export default i18n;
