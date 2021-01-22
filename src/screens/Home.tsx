import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {AmmountSlider, Button, Text} from '../components';
import {useCreditSimulator} from '../hooks/useCreditSimulator';
import {colors} from '../theme/colors';

export default function () {
  const {amount, dues, result, errors} = useCreditSimulator();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background.primary}
      />
      <SafeAreaView style={style.safeArea}>
        <ScrollView contentContainerStyle={style.scrollView}>
          <View style={style.wrapper}>
            <Text type="title">Simulá tu credito</Text>
            <AmmountSlider
              label={'MONTO TOTAL'}
              decorator={'$ '}
              onChange={amount.onChange}
              value={amount.value}
              minAmount={amount.min}
              maxAmount={amount.max}
            />
            <AmmountSlider
              label={'PLAZO'}
              onChange={dues.onChange}
              value={dues.value}
              minAmount={dues.min}
              maxAmount={dues.max}
            />

            {errors.length ? (
              <>
                {errors.map((e, k) => (
                  <Text key={k} type="error">
                    {e}
                  </Text>
                ))}
              </>
            ) : (
              <>
                <View style={style.result}>
                  <Text type="accentBold">CUOTA FIJA POR MES</Text>
                  <Text type="accentExtraBig">{`$ ${result}`}</Text>
                </View>

                <Button type="accent" textType="accentBig">
                  OBTENÉ CRÉDITO
                </Button>
                <Button textType="accentBold">OBTENÉ CRÉDITO</Button>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.background.primary},
  scrollView: {flexGrow: 1, backgroundColor: colors.background.primary},
  wrapper: {
    marginTop: 50,
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
