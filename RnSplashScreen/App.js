/**
 * @format
 */

import React, { memo } from 'react';
import { Text, View } from 'react-native';

function App() {
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
