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
            <AmmountSlider
              label={'Monto Total'}
              decorator={'$'}
              onChange={() => {}}
              minAmount={5000}
              maxAmount={50000}
            />
            <AmmountSlider
              label={'Plazo'}
              onChange={() => {}}
              minAmount={3}
              maxAmount={24}
            />
            <Text>Hello World</Text>
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
    margin: 12,
    padding: 14,
    backgroundColor: colors.background.darktest,
  },
});
