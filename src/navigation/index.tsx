import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { MyDarkTheme, MyLightTheme } from '../theme/colors';
import RootStackNavigator from './MainNavigator';

export const Navigation = () => {
  const scheme = useColorScheme();

  useEffect(() => {
    console.log(`Scheme changed to: ${scheme}`);
  }, [scheme]);

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyLightTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
