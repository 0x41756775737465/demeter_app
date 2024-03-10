import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import RequestFactory from '../../models/api/RequestFactory';

const Login: React.FC = () => {
  const [request, setRequest] = React.useState(
    RequestFactory.createDemeterLoginRequest('', '', '')
  );
  const handleEmailChange = (email: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterLoginRequest(
        request.getUsername(),
        email,
        request.getPassword()
      );
    });
  };

  const handlePasswordChange = (password: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterLoginRequest(
        request.getUsername(),
        request.getEmail(),
        password
      );
    });
  };

  const handleSubmit = async () => {
    await request.submit();
    setRequest(request.clone());
  };

  return (
    <View>
      <Text>{request.getMessage()}</Text>
      <TextInput placeholder="Email" onChangeText={handleEmailChange} value={request.getEmail()} />
      <TextInput
        placeholder="Password"
        onChangeText={handlePasswordChange}
        value={request.getPassword()}
      />
      <Button onPress={handleSubmit} title="login" />
    </View>
  );
};

export default Login;
