import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }): ViewStyle[] =>
        [
          styles.button,
          disabled ? styles.disabled : null,
          pressed && !disabled ? styles.pressed : null,
        ].filter(Boolean) as ViewStyle[]
      }
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  } as ViewStyle,
  pressed: {
    backgroundColor: '#0056b3',
  } as ViewStyle,
  disabled: {
    backgroundColor: '#cccccc',
  } as ViewStyle,
  text: {
    color: '#fff',
    fontWeight: 'bold',
  } as TextStyle,
});
