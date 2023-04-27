import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import * as Localization from 'expo-localization';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { i18n } from './src/i18n';
import { Navigation } from './src/navigation';

export default function App() {
  const theme = useColorScheme();

  i18n.enableFallback = true;
  // eslint-disable-next-line sort-keys
  i18n.defaultLocale = 'en';
  i18n.locale = Localization.locale;

  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';
  const backgroundColor = theme === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card;

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <Navigation />
    </>
  );
}
