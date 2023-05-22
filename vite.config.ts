import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env.VITE_APP_API);

  return {
    plugins: [
      react(),
      viteCompression(),
      // TODO 根据打包环境开启
      mode === 'production' ? visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: 'report.html'
      }) : null
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5173',
          changeOrigin: true
        }
      }
    },
    build: {
      minify: 'esbuild',
      esbuild: {
        drop: mode === 'production' ? ['console', 'debugger'] : []
      }
    }
  };
});
