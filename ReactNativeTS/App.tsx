/**
 * @format
 */

import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
})

function App() {
  return <View style={styles.container} />
}

export default memo(App)
