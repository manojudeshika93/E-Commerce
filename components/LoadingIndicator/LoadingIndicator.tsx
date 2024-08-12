import React from 'react';
import { ActivityIndicator as RNLoadingIndicator, View } from 'react-native';

import { Color, tw } from '@/config';

export interface LoadingIndicatorProps {
  color?: string;
  size?: 'small' | 'large';
}

export function LoadingIndicator({ color = Color.primary[500], size = 'large' }: LoadingIndicatorProps) {
  return <View style={tw`w-full h-full items-center justify-center`}><RNLoadingIndicator color={color} size={size} animating={true} /></View>;
}
