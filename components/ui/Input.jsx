import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({
  style,
  placeholder,
  value,
  onChangeText,
  placeholderTextColor = '#999',
  ...props
}) => {
  return (
    <TextInput
      style={[styles.baseInput, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  baseInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    minHeight: 45,
  },
});

export default Input;