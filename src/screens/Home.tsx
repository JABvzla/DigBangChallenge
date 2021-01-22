import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Text} from '../components/text';

export default function () {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Hello World</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
