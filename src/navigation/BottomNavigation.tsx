import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { i18n } from '../i18n/i18n';
import HomeScreen from '../screens/HomeScreen';
import SecondTabScreen from '../screens/SecondTabScreen';
import ThirdTabScreen from '../screens/ThirdTabScreen';
import { BottomTabParamList } from '../types/navigation';

interface IconProps {
  icon: 'home' | 'numeric-2-circle-outline' | 'numeric-3-circle-outline';
  color: string;
}

const MainTab = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon({ icon, color }: IconProps) {
  return <MaterialCommunityIcons name={icon} size={24} color={color} />;
}

function BottomNavigator() {
  const { colors } = useTheme();

  return (
    <MainTab.Navigator initialRouteName="HomeScreen">
      <MainTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            TabBarIcon({ color: focused ? colors.primary : colors.text, icon: 'home' }),
          title: i18n.t('homeTabTitle'),
        }}
      />
      <MainTab.Screen
        name="SecondTabScreen"
        component={SecondTabScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            TabBarIcon({
              color: focused ? colors.primary : colors.text,
              icon: 'numeric-2-circle-outline',
            }),
          title: i18n.t('secondTabTitle'),
        }}
      />
      <MainTab.Screen
        name="ThirdTabScreen"
        component={ThirdTabScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            TabBarIcon({
              color: focused ? colors.primary : colors.text,
              icon: 'numeric-3-circle-outline',
            }),
          title: i18n.t('thirdTabTitle'),
        }}
      />
    </MainTab.Navigator>
  );
}

export default BottomNavigator;
