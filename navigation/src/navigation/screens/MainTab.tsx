import React, { memo } from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { RootStackNavigationProp } from './RootStack';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';

type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;
// 메인탭 root 에서 useNavigation<MainTabNavigationProp>() 을 사용하기 위해 따로따로
// 해도되지만 이렇게 CompositeNavigationProp 을 사용하여 하나로 묶어줄수있다.

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

const { Navigator, Screen } =
  createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      {/* 컴포넌트 자체를 stack 으로 변경해서 사용가능. */}

      <Screen name="Account" component={AccountScreen} />
    </Navigator>
  );
}

export default memo(MainTab);
