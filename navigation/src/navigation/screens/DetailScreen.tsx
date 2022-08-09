import {
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from './RootStack';

type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'Detail'
>;

function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();

  return (
    <View>
      <Text>{params.id}</Text>

      <Text>{params.text}</Text>
    </View>
  );
}

export default memo(DetailScreen);
