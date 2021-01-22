import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {
  children: string;
}

export function Text(props: TextProps) {
  return <RNText {...props} />;
}
