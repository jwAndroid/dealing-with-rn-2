/**
 * @format
 */

import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Counter } from './src/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})

function App() {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  )
}

export default memo(App)
