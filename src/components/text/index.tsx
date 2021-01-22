import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import {colors} from '../../theme/colors';

type textTypes = 'text' | 'title' | 'accent' | 'accentBold' | 'accentBig';
interface TextProps extends RNTextProps {
  type?: textTypes;
  children: string;
}

export function Text(props: TextProps) {
  return (
    <RNText style={[style.text, props.type && style[props.type]]} {...props} />
  );
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    color: colors.text.primary,
    fontSize: 15,
  },
  accent: {
    color: colors.text.accent,
    fontSize: 18,
  },
  accentBold: {
    color: colors.text.accent,
    fontWeight: 'bold',
    fontSize: 13,
  },
  accentBig: {
    color: colors.text.accent,
    fontWeight: 'bold',
    fontSize: 30,
  },
  title: {
    color: colors.text.accent,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 15,
    marginBottom: 30,
  },
});
