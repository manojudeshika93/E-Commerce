import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ProfileScreen from '../(tabs)/profile';

jest.mock('expo-constants', () => ({
  ...jest.requireActual('expo-constants'),
  expoConfig: {
    version: '1.0.0',
  },
}));

describe('ProfileScreen', () => {
  it('renders correctly and displays the thank you message', () => {
    render(<ProfileScreen />);

    expect(screen.getByText('Thanks for visiting us')).toBeTruthy();
  });

  it('displays the app version correctly', () => {
    render(<ProfileScreen />);

    expect(screen.getByText('App Version: 1.0.0')).toBeTruthy();
  });
});
