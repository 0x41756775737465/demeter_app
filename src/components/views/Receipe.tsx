import React from 'react';
import { Button, Text, View } from 'react-native';

const Recipe: React.FC = () => {
  return (
    <View>
      <Text>Recipe</Text>
      <Button title="Modify" />
      <Button title="Delete" />
    </View>
  );
};

export default Recipe;
