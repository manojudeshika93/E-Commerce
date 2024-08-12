import React from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native-switch';

import { Color, tw } from '@/config/tw';
import { Text, View } from 'react-native';

export function Switch({ disabled = false, value, onValueChange }: Readonly<SwitchProps>) {
  const toggleWidth = 52;
  const toggleHeight = 27;
  const circleSize = 22;
  const switchWidthMultiplier = toggleWidth / circleSize;

  return (
    <View style={tw`flex-row items-center justify-center gap-2 bg-custom-white p-2 rounded-full`}>
      <Text style={tw`text-b1-semibold text-secondary-600`}>EN</Text>
      <RNSwitch
        testID='switch'
        value={value}
        containerStyle={tw``}
        outerCircleStyle={tw`mx-0.5`}
        onValueChange={onValueChange}
        disabled={disabled}
        circleSize={circleSize}
        barHeight={toggleHeight}
        circleBorderWidth={0}
        backgroundActive={disabled ? Color.secondary[300] : Color.secondary[400]}
        backgroundInactive={disabled ? Color.secondary[300] : Color.secondary[400]}
        circleActiveColor={disabled ? Color.secondary[400] : Color.primary[500]}
        circleInActiveColor={disabled ? Color.secondary[400] : Color.primary[500]}
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={switchWidthMultiplier}
        switchRightPx={1.6}
        switchWidthMultiplier={switchWidthMultiplier}
      />
      <Text style={tw`text-b1-semibold text-secondary-600`}>AR</Text>
    </View>
  );
}
