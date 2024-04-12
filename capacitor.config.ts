import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test-live-reload',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
