import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import I18n from 'i18n-js';
import { useTheme } from '@react-navigation/native';

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>{I18n.t('welcomeMessage')}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
