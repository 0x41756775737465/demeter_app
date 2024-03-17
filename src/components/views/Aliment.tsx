import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { ServiceFactory } from '../../service/ServiceFactory';
import { IUser } from '../../models/api/data/User';
import RequestFactory from '../../models/api/RequestFactory';
import { IAliment } from '../../models/api/data/Aliment';

interface AlimentViewProps {
  pUser: IUser;
  pAliment: IAliment;
}

const Aliment: React.FC<AlimentViewProps> = ({ pUser, pAliment }) => {
  const [service, setService] = useState(ServiceFactory.createDemeterAlimentService(pUser));
  const [request, setRequest] = React.useState(
    RequestFactory.createDemeterAlimentRequest(pAliment)
  );

  const handleCreate = () => {
    service.create(request);
  };
  const handleUpdate = () => {
    service.update(request);
  };

  const handleDelete = () => {
    service.delete(request);
  };

  return (
    <View>
      <Text>{request.getAliment().getId()}</Text>
      <Text>{request.getAliment().getNom()}</Text>
      <Text>{request.getAliment().getCalories()}</Text>
      <Text>{request.getAliment().getCarbohydrates()}</Text>
      <Text>{request.getAliment().getFats()}</Text>
      <Text>{request.getAliment().getFibers()}</Text>
      <Text>{request.getAliment().getProteins()}</Text>
      <Text>{request.getAliment().getId()}</Text>
      <Text>{request.getAliment().getId()}</Text>

      <Button title="Create" onPress={handleCreate} />
      <Button title="Update" onPress={handleUpdate} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default Aliment;
