import {
  DemeterConfigurationResponse,
  IDemeterConfigurationResponse,
} from './response/DemeterConfigurationResponse';
import { IAliment } from './data/Aliment';
import { DemeterAuthResponse, IDemeterAuthResponse } from './response/DemeterAuthResponse';
import { DemeterAlimentResponse, IDemeterAlimentResponse } from './response/DemeterAlimentResponse';
import { DemeterResponse, IDemeterResponse } from './response/DemeterResponse';
import { DemeterUserResponse, IDemeterUserResponse } from './response/DemeterUserResponse';
import { IRecipe } from './data/Recipe';
import { DemeterRecipeResponse, IDemeterRecipeResponse } from './response/DemeterRecipeResponse';
import { DemeterMealResponse, IDemeterMealResponse } from './response/DemeterMealResponse';
import { IMeal } from './data/Meal';
import { IUser } from './data/User';

class ResponseFactory {
  static createDemeterResponse(status: string, message: string): IDemeterResponse {
    return new DemeterResponse(status, message);
  }
  static createDemeterAuthResponse(
    status: string,
    message: string,
    token: string
  ): IDemeterAuthResponse {
    return new DemeterAuthResponse(status, message, token);
  }
  static createDemeterUserResponse(
    status: string,
    message: string,
    users: IUser[]
  ): IDemeterUserResponse {
    return new DemeterUserResponse(status, message, users);
  }
  static createDemeterConfigurationResponse(
    status: string,
    message: string
  ): IDemeterConfigurationResponse {
    return new DemeterConfigurationResponse(status, message);
  }

  static createDemeterAlimentResponse(
    status: string,
    message: string,
    aliment: IAliment
  ): IDemeterAlimentResponse {
    return new DemeterAlimentResponse(status, message, aliment);
  }
  static createDemeterRecipeResponse(
    status: string,
    message: string,
    recipe: IRecipe
  ): IDemeterRecipeResponse {
    return new DemeterRecipeResponse(status, message, recipe);
  }
  static createDemeterMealResponse(
    status: string,
    message: string,
    meal: IMeal
  ): IDemeterMealResponse {
    return new DemeterMealResponse(status, message, meal);
  }
}

export default ResponseFactory;
