import React from 'react';
import { ActivityIndicator as RNLoadingIndicator } from 'react-native';

import { Color } from '@/config';

export interface LoadingIndicatorProps {
  color?: string;
  size?: 'small' | 'large';
}

export function LoadingIndicator({ color = Color.primary[500], size = 'large' }: LoadingIndicatorProps) {
  return <RNLoadingIndicator color={color} size={size} animating={true} />;
}
