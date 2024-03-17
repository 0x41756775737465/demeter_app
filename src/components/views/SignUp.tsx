import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import RequestFactory from '../../models/api/RequestFactory';

const SignUp: React.FC = () => {
  const [request, setRequest] = React.useState(
    RequestFactory.createDemeterSignUpRequest('', '', '', '')
  );
  const handleUsernameChange = (username: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterSignUpRequest(
        username,
        request.getEmail(),
        request.getPassword(),
        request.getRepeatPassword()
      );
    });
  };
  const handleEmailChange = (email: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterSignUpRequest(
        request.getUsername(),
        email,
        request.getPassword(),
        request.getRepeatPassword()
      );
    });
  };

  const handlePasswordChange = (password: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterSignUpRequest(
        request.getUsername(),
        request.getEmail(),
        password,
        request.getRepeatPassword()
      );
    });
  };
  const handleRepeatPasswordChange = (repeatPassword: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterSignUpRequest(
        request.getUsername(),
        request.getEmail(),
        request.getPassword(),
        repeatPassword
      );
    });
  };

  const handleSubmit = async () => {
    setRequest(request.clone());
  };

  return (
    <View>
      <Text>{request.getMessage()}</Text>
      <TextInput
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={request.getUsername()}
      />
      <TextInput placeholder="Email" onChangeText={handleEmailChange} value={request.getEmail()} />
      <TextInput
        placeholder="Password"
        onChangeText={handlePasswordChange}
        value={request.getPassword()}
      />
      <TextInput
        placeholder="Repeat Password"
        onChangeText={handleRepeatPasswordChange}
        value={request.getRepeatPassword()}
      />
      <Button onPress={handleSubmit} title="SignUp" />
    </View>
  );
};

export default SignUp;
