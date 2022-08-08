/**
 * @format
 */

import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
    </View>
  );
}

export default memo(App);
