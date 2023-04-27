import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Type containing all screens for rootStack
 */
export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
};

/**
 * Type containing all screens for bottomTab
 */
export type BottomTabParamList = {
  HomeScreen: undefined;
  SecondTabScreen: undefined;
  ThirdTabScreen: undefined;
};

// BottomTabNavigator
export type ConsumedNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'HomeScreen'>,
  StackNavigationProp<RootStackParamList>
>;
export type SecondNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'SecondTabScreen'>,
  StackNavigationProp<RootStackParamList>
>;
export type ThirdNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'ThirdTabScreen'>,
  StackNavigationProp<RootStackParamList>
>;
