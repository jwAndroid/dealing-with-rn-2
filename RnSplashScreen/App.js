/**
 * @format
 */

import React, { memo, useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Hello yarn</Text>
    </View>
  );
}

export default memo(App);
