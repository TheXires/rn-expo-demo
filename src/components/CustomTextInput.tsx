import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  autoCompleteType?: 'password' | 'email' | 'name' | 'username' | undefined;
  autoCorrect?: boolean;
  hideTitle?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | undefined;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  title?: string;
  value: string;
}

function CustomTextInput({
  autoCorrect = true,
  keyboardType = 'default',
  onChangeText,
  placeholder,
  secureTextEntry = false,
  value,
}: Props) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderColor: colors.border }]}>
      <TextInput
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        placeholderTextColor={colors.border}
        returnKeyType="done"
        secureTextEntry={secureTextEntry}
        style={{ color: colors.text }}
        value={value}
      />
    </View>
  );
}

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 2,
    height: 40,
    padding: 5,
    justifyContent: 'center',
    flexGrow: 1,
  },
});
