import { View, Text } from 'react-native'
import React, { memo, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { RootStackNavigationProp } from './RootStack'

function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>()

  const onPress = useCallback(() => {
    navigation.navigate('Detail', { id: 1, text: 'from home' })
  }, [navigation])

  return (
    <View>
      <Text onPress={onPress}>GO detail screen</Text>
    </View>
  )
}

export default memo(HomeScreen)
