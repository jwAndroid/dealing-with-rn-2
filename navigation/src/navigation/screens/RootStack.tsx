import React, { memo } from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

export type RootStackParamList = {
  Home: undefined
  Detail: {
    id : number
    text : string
  }
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

function RootStack() {
  return (
    <Navigator>
      <Screen component={HomeScreen} name="Home" />
      <Screen component={DetailScreen} name="Detail" />
    </Navigator>
  );
}

export default memo(RootStack)
