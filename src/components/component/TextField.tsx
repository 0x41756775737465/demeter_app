import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export interface ITextField {
  name: string;
  handleChange(value: string): void;
}

export const TextField: React.FC<ITextField> = ({ name, handleChange }) => {
  return (
    <View>
      <Text>{name}</Text>
      <TextInput onChangeText={handleChange} />
    </View>
  );
};
