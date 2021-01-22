import React from 'react';
import {Text as RNText} from 'react-native';

interface TextProps {
  children: string;
}

export function Text({children}: TextProps) {
  return <RNText>{children}</RNText>;
}
