import React, { useContext } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { IUser } from '../../models/api/data/User';
import RequestFactory from '../../models/api/RequestFactory';
import { userContext } from '../../utils/context';
import { ServiceFactory } from '../../service/ServiceFactory';
import { DataFactory } from '../../models/api/data/DataFactory';

interface ProfileProps {
  user: IUser;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const [request, setRequest] = React.useState(RequestFactory.createDemeterUserRequest(props.user));
  const { currentUser, setCurrentUser } = useContext(userContext);

  const toggleChange = () => {
    throw new Error('toggleChange() method must be implemented');
  };
  const handleCreate = () => {
    service.create(request);
  };
  const handleUpdate = () => {
    service.update(request);
  };

  const handleDelete = () => {
    service.delete(request);
  };

  const handleLogOut = async () => {
    let service = ServiceFactory.createDemeterAuthService(props.user);
    await service.delete(request);
    console.log('handleLogOut resquet response', request.getResponse());

    setCurrentUser(DataFactory.createUser(0, '', '', '', '', ''));
    setRequest(request.clone());
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
      <Button onPress={handleLogOut} title="LogOut" />
    </View>
  );
};

export default Profile;
