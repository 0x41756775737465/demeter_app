import { IConfiguration } from './data/Configuration';
import { IUser } from './data/User';
import {
  DemeterConfigurationRequest,
  IDemeterConfigurationRequest,
} from './request/DemeterConfigurationRequest';
import { IAliment } from './data/Aliment';
import { IMeal } from './data/Meal';
import { IRecipe } from './data/Recipe';
import { DemeterAlimentRequest, IDemeterAlimentRequest } from './request/DemeterAlimentRequest';
import { DemeterAuthRequest, IDemeterAuthRequest } from './request/DemeterAuthRequest';
import { DemeterMealRequest, IDemeterMealRequest } from './request/DemeterMealRequest';
import { DemeterRecipeRequest, IDemeterRecipeRequest } from './request/DemeterRecipeRequest';
import { DemeterRequest, IDemeterRequest } from './request/DemeterRequest';
import { DemeterUserRequest, IDemeterUserRequest } from './request/DemeterUserRequest';
import { DemeterSignUpRequest, IDemeterSignUpRequest } from './request/DemeterSignUpRequest';

class RequestFactory {
  static createDemeterRequest(): IDemeterRequest {
    return new DemeterRequest();
  }
  static createDemeterAuthRequest(
    username: string,
    email: string,
    password: string
  ): IDemeterAuthRequest {
    return new DemeterAuthRequest(username, email, password);
  }
  static createDemeterUserRequest(user: IUser): IDemeterUserRequest {
    return new DemeterUserRequest(user);
  }
  static createDemeterConfigurationRequest(
    user: IUser,
    configuration: IConfiguration
  ): IDemeterConfigurationRequest {
    return new DemeterConfigurationRequest(user, configuration);
  }
  static createDemeterSignUpRequest(
    username: string,
    email: string,
    password: string,
    repeatPassword: string
  ): IDemeterSignUpRequest {
    return new DemeterSignUpRequest(username, email, password, repeatPassword);
  }

  static createDemeterAlimentRequest(aliment: IAliment): IDemeterAlimentRequest {
    return new DemeterAlimentRequest(aliment);
  }

  static createDemeterRecipeRequest(recipe: IRecipe): IDemeterRecipeRequest {
    return new DemeterRecipeRequest(recipe);
  }

  static createDemeterMealRequest(meal: IMeal): IDemeterMealRequest {
    return new DemeterMealRequest(meal);
  }
}

export default RequestFactory;
