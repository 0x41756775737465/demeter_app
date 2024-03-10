import React from 'react';
import { Button, Text, View } from 'react-native';
import { ENV_NAME, VERSION } from '@env';

const Home: React.FC = () => {
  return (
    <View>
      <Text>DEMETER</Text>
      <Text>ENV : {ENV_NAME}</Text>
      <Text>VERSION : {VERSION}</Text>
      <Button title="Login" />
    </View>
  );
};

export default Home;
