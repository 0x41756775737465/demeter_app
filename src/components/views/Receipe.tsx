import React from 'react';
import { Button, Text, View } from 'react-native';
import { ServiceFactory } from '../../service/ServiceFactory';
import { IRecipe } from '../../models/api/data/Recipe';
import RequestFactory from '../../models/api/RequestFactory';
import { IUser } from '../../models/api/data/User';

interface RecipeViewProps {
  user: IUser;
  recipe: IRecipe;
}

const Recipe: React.FC<RecipeViewProps> = ({ pUser, pRecipe }) => {
  const [service, setService] = useState(ServiceFactory.createDemeterRecipeService(pUser));
  const [request, setRequest] = React.useState(RequestFactory.createDemeterRecipeRequest(pRecipe));

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
      <Text>Recipe</Text>
      <Button title="Modify" />
      <Button title="Delete" />
    </View>
  );
};

export default Recipe;
