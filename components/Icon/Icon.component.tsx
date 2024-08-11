import { CloseCircle } from 'iconsax-react-native';
import React from 'react';

import { DetailedLogoSvg } from '@/assets';
import { Color } from '@/config';
import { IconVariantType, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';

interface IconProps {
  variant?: IconVariantType;
  size?: number;
  color?: string;
}

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

export function CloseIcon({
  variant = IconVariantType.BOLD,
  color = Color.secondary[100],
  size = 16,
}: Readonly<IconProps>) {
  return <CloseCircle testID="close-icon" variant={variant} size={size} color={color} />;
}

export function DetailedLogo({
  color = Color.secondary[100],
  width = SCREEN_WIDTH,
  height = SCREEN_HEIGHT * 0.05,
}: Readonly<SvgProps>) {
  return <DetailedLogoSvg testID="detailed-logo" fill={color} width={width} height={height} />;
}
