import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {AmmountSlider, Text} from '../components';
import {colors} from '../theme/colors';

export default function () {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={style.safeArea}>
        <ScrollView contentContainerStyle={style.scrollView}>
          <View style={style.wrapper}>
            <Text type="title">Simulá tu credito</Text>
            <AmmountSlider
              label={'MONTO TOTAL'}
              decorator={'$'}
              onChange={() => {}}
              minAmount={5000}
              maxAmount={50000}
            />
            <AmmountSlider
              label={'PLAZO'}
              onChange={() => {}}
              minAmount={3}
              maxAmount={24}
            />
            <View style={style.result}>
              <Text type="accentBold">CUOTA FIJA POR MES</Text>
              <Text type="accentBig">$ 50000</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  safeArea: {flex: 1},
  scrollView: {flexGrow: 1, backgroundColor: '#084f85'},
  wrapper: {
    margin: 15,
    padding: 20,
    backgroundColor: colors.background.secondary,
  },

  result: {
    backgroundColor: colors.background.darktest,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
