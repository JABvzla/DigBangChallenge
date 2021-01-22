import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import {colors} from '../../theme/colors';

interface TextProps extends RNTextProps {
  children: string;
}

export function Text(props: TextProps) {
  return <RNText style={style.text} {...props} />;
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    color: colors.text.primary,
  },
});
