import React from 'react';
import { Button, Text, View } from 'react-native';

const Aliment: React.FC = () => {
  return (
    <View>
      <Text>Aliment</Text>
      <Button title="Modify" />
      <Button title="Delete" />
    </View>
  );
};

export default Aliment;
