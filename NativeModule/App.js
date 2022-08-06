/**
 * @format
 */

import React, { memo, useCallback } from 'react';
import { Text, View } from 'react-native';

import ToastModule from './Toast';

function App() {
  const onPress = useCallback(() => {
    ToastModule.show('Hello World', ToastModule.SHORT);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text onPress={onPress}>Show Toast</Text>
    </View>
  );
}

export default memo(App);
