import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import RequestFactory from '../../models/api/RequestFactory';
import { ServiceFactory } from '../../service/ServiceFactory';
import { DataFactory } from '../../models/api/data/DataFactory';
import { IUser } from '../../models/api/data/User';
import { userContext } from '../../utils/context';

const Auth: React.FC = () => {
  const {  setCurrentUser } = React.useContext(userContext);

  const [request, setRequest] = React.useState(RequestFactory.createDemeterAuthRequest('', '', ''));
  const handleEmailChange = (email: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterAuthRequest(
        request.getUsername(),
        email,
        request.getPassword()
      );
    });
  };

  const handlePasswordChange = (password: string) => {
    setRequest(() => {
      return RequestFactory.createDemeterAuthRequest(
        request.getUsername(),
        request.getEmail(),
        password
      );
    });
  };

  const handleSubmit = async () => {
    let user: IUser = DataFactory.createUser(
      0,
      request.getEmail(),
      request.getPassword(),
      '',
      '',
      ''
    );
    let service = ServiceFactory.createDemeterAuthService(user);
    await service.create(request);
    console.log('resquet response', request.getResponse());

    // Méthode de mise à jour du thème
    setCurrentUser(DataFactory.createUser(0, '', request.getResponse().getToken(), '', '', ''));
    setRequest(request.clone());
  };

  return (
    <View>
      <Text>{request.getMessage()}</Text>
      <Text>{request.getResponse()?.getStatus()}</Text>
      <Text>{request.getResponse()?.getToken()}</Text>

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

export default Auth;
