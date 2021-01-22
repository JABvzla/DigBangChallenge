import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';
import {Text, TextTypes} from '../text';

type buttonTypes = 'default' | 'accent';

interface ButtonProps {
  type?: buttonTypes;
  children: string;
  textType?: TextTypes;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={[style.default, props.type && style[props.type]]}>
      <Text type={props.textType}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  default: {
    padding: 20,
    backgroundColor: colors.background.lightest,
    alignItems: 'center',
  },
  accent: {
    backgroundColor: colors.accent,
  },
});
