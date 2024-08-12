import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import { SITE_URL } from '@/constants';
import { ToastService } from '@/services';

import { Linking } from 'react-native';
import HomeScreen from '../(tabs)/index';

jest.mock('@/services', () => ({
  ToastService: {
    success: jest.fn(),
  },
}));

jest.mock('expo-linking', () => ({
  openURL: jest.fn(),
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and displays the welcome message', () => {
    render(<HomeScreen />);

    expect(screen.getByText('Welcome to Mumzworld')).toBeTruthy();
  });

  it('calls ToastService.success on mount', () => {
    render(<HomeScreen />);

    expect(ToastService.success).toHaveBeenCalledWith({ message: 'Have a nica day!!!' });
  });

  it('opens the URL when the button is pressed', () => {
    render(<HomeScreen />);

    const button = screen.getByText('Visit Us');
    fireEvent.press(button);

    expect(Linking.openURL).toHaveBeenCalledWith(SITE_URL);
  });
});
