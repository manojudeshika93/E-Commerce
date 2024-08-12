import { NativeModules } from 'react-native';

NativeModules.SettingsManager = {
  settings: {},
};

jest.mock('expo-constants', () => ({
  manifest: {
    version: '1.0.0',
  },
  expoConfig: {
    version: '1.0.0',
  },
}));
