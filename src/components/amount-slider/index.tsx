import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Slider} from '../slider';
import {Text} from '../text';

interface AmmountSliderProps {
  label: string;
  minAmount: number;
  maxAmount: number;
  defaultAmount?: number;
  decorator?: string;
  onChange: (value: number) => void;
}

export function AmmountSlider({decorator = '', ...props}: AmmountSliderProps) {
  return (
    <>
      <View style={style.section}>
        <Text>{props.label}</Text>
        <TextInput style={style.input} />
      </View>
      <Slider minimumValue={props.maxAmount} maximumValue={props.minAmount} />
      <View style={style.section}>
        <Text>{`${decorator} ${props.minAmount}`}</Text>
        <Text>{`${decorator} ${props.maxAmount}`}</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: '#fff',
    borderWidth: 3,
    minWidth: 150,
  },
});
