import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type TextButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function TextButton({ title, onPress, disabled = false }: TextButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }): ViewStyle[] =>
        [
          styles.textButton,
          pressed && !disabled ? styles.pressed : null,
          disabled ? styles.disabled : null,
        ].filter(Boolean) as ViewStyle[]
      }
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textButton: {
    padding: 8,
  } as ViewStyle,
  pressed: {
    opacity: 0.5,
  } as ViewStyle,
  disabled: {
    opacity: 0.3,
  } as ViewStyle,
  text: {
    color: '#007bff',
    fontWeight: 'bold',
  } as TextStyle,
});
