import RNSlider from '@react-native-community/slider';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {colors} from '../../theme/colors';

interface SliderProps {
  value?: number;
  onValueChange?: (value: number) => void;
  minimumValue: number;
  maximumValue: number;
  style?: StyleProp<ViewStyle>;
}

export function Slider(props: SliderProps) {
  return (
    <RNSlider
      thumbTintColor={colors.text.primary}
      minimumTrackTintColor={colors.text.primary}
      maximumTrackTintColor={colors.text.primary}
      {...props}
    />
  );
}
