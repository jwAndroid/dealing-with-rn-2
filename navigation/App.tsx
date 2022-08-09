/**
 * @format
 */

import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
}

export default memo(App);
