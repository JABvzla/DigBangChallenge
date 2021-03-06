import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../theme/colors';
import {debounce} from '../../utils/debounce';
import {Slider} from '../slider';
import {Text} from '../text';

interface AmmountSliderProps {
  label: string;
  minAmount: number;
  maxAmount: number;
  value: number;
  defaultAmount?: number;
  decorator?: string;
  onChange: (value: number) => void;
}

export function AmmountSlider({decorator = '', ...props}: AmmountSliderProps) {
  return (
    <View style={style.wrapper}>
      <View style={style.section}>
        <Text>{props.label}</Text>
        <TextInput
          value={props.value.toString()}
          onChangeText={(v) => props.onChange(+v)}
          keyboardType="number-pad"
          style={style.input}
        />
      </View>
      <Slider
        value={props.value}
        onValueChange={debounce(props.onChange, 100)}
        minimumValue={props.minAmount}
        maximumValue={props.maxAmount}
      />
      <View style={style.section}>
        <Text type="accent">{`${decorator} ${props.minAmount}`}</Text>
        <Text type="accent">{`${decorator} ${props.maxAmount}`}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    color: colors.text.accent,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    height: 35,
    padding: 1,
    borderColor: colors.text.primary,
    borderWidth: 1,
    minWidth: 150,
  },
});
