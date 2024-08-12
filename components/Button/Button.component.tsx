import React, { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { tw } from '@/config';

import { ButtonProps } from './Button.types';

export function Button({ onPress, title, disabled = false, fullWidth = true, isLink = false }: Readonly<ButtonProps>) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const backgroundColor = useMemo(() => {
    if (disabled) return 'bg-secondary-400';
    if (isLink) return 'bg-custom-transparent';
    if (isButtonClicked) return 'bg-primary-400';
    return 'bg-primary-500';
  }, [isButtonClicked, disabled]);

  const pressableStyle = tw.style(`items-center justify-center rounded-2xl h-15 ${backgroundColor}`, { 'w-full': fullWidth });

  return (
    <Pressable
      style={pressableStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setIsButtonClicked(true)}
      onPressOut={() => setIsButtonClicked(false)}>
      <View style={tw`items-center justify-center`}>
        {title.length > 0 && <Text style={tw`text-h3-semibold ${isLink ? 'text-secondary-400 underline' : 'text-custom-white'}`}>{title}</Text>}
      </View>
    </Pressable>
  );
}
