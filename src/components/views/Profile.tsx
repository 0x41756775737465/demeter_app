import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { IUser } from '../../models/data/User';
import RequestFactory from '../../models/api/RequestFactory';

interface ProfileProps {
  user: IUser;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const [request, setRequest] = React.useState(
    RequestFactory.createDemeterUpdateUserRequest(props.user)
  );

  const toggleChange = () => {
    throw new Error('toggleChange() method must be implemented');
  };

  return (
    <View>
      <Button onPress={toggleChange} title="Change" />
      <Image source={require('../../assets/profile.svg')} style={{ width: 400, height: 400 }} />
      <Text>{request.getUser().getUsername()}</Text>
      <Text>
        {request.getUser().getFirstname()} {request.getUser().getName()}
      </Text>
      <Text>{request.getUser().getEmail()}</Text>
    </View>
  );
};

export default Profile;
