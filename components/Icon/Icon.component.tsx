import { CloseCircle } from 'iconsax-react-native';
import React from 'react';

import { Color } from '@/config';
import { IconVariantType } from '@/constants';

interface IconProps {
  variant?: IconVariantType;
  size?: number;
  color?: string;
}

export function CloseIcon({
  variant = IconVariantType.BOLD,
  color = Color.secondary[100],
  size = 16,
}: Readonly<IconProps>) {
  return <CloseCircle variant={variant} size={size} color={color} />;
}
