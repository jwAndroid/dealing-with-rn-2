/**
 * @format
 */

import React, { memo, useCallback } from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';

import ToastModule from './Toast';

function App() {
  const onPress = useCallback(() => {
    if (Platform.OS === 'android') {
      ToastModule.show('Hello World', ToastModule.SHORT);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar />

      <Text onPress={onPress}>Show Toast</Text>
    </View>
  );
}

export default memo(App);
