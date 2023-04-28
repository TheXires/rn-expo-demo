import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const SecondTabScreen = () => {
  const { colors } = useTheme();

  const showPopup = () => {
    Alert.alert('AlertTitle', 'This is the alert message', [
      { style: 'cancel', text: 'Cancel' },
      { onPress: () => null, style: 'destructive', text: 'Delete' },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>SecondTabScreen</Text>
      <Button title="show popup" onPress={showPopup} />
    </View>
  );
};

export default SecondTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
