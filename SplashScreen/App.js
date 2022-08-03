/**
 * @format
 */

import React, { memo } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.text}>app splash screen ready</Text>
    </View>
  );
}

export default memo(App);
