import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from '../types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    // add context provider around here
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen name="Main" component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
