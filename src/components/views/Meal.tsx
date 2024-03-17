import React from 'react';
import { Button, Text, View } from 'react-native';
import { ServiceFactory } from '../../service/ServiceFactory';
import { IMeal } from '../../models/api/data/Meal';
import RequestFactory from '../../models/api/RequestFactory';
import { IUser } from '../../models/api/data/User';

interface MealViewProps {
  user: IUser;
  Meal: IMeal;
}

const Meal: React.FC<MealViewProps> = ({ pUser, pMeal }) => {
  const [service, setService] = useState(ServiceFactory.createDemeterMealService(pUser));
  const [request, setRequest] = React.useState(RequestFactory.createDemeterMealRequest(pMeal));
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
      <Text>Meal</Text>
      <Text>{request.getMeal().getDate()}</Text>
      <Button title="Modify" />
      <Button title="Delete" />
    </View>
  );
};

export default Meal;
