import React, { memo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import DetailScreen from './DetailScreen';
import MainTab, {
  MainTabNavigationScreenParams,
} from './MainTab';

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
    text: string;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } =
  createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Navigator>
      <Screen
        component={MainTab}
        name="MainTab"
        options={{
          headerShown: false,
        }}
      />

      <Screen component={DetailScreen} name="Detail" />
    </Navigator>
  );
}

export default memo(RootStack);
