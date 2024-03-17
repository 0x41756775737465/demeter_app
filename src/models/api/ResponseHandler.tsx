import { IDemeterConfigurationResponse } from './response/DemeterConfigurationResponse';
import { IAliment } from './data/Aliment';
import { IDemeterAuthResponse } from './response/DemeterAuthResponse';
import { IDemeterAlimentResponse } from './response/DemeterAlimentResponse';
import { IDemeterResponse } from './response/DemeterResponse';
import { IDemeterUserResponse } from './response/DemeterUserResponse';
import ResponseFactory from './ResponseFactory';
import { IRecipe } from './data/Recipe';
import { IDemeterRecipeResponse } from './response/DemeterRecipeResponse';
import { IMeal } from './data/Meal';
import { IDemeterMealResponse } from './response/DemeterMealResponse';
import { IUser } from './data/User';

class ResponseHandler {
  static jsonToDemeterResponse(jsonData: any): IDemeterResponse {
    const status: string = jsonData.status;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterResponse(status, message);
  }

  static jsonToDemeterAuthResponse(jsonData: any): IDemeterAuthResponse {
    const status: string = jsonData.status;
    const message: string = jsonData.message;
    const token: string = jsonData.token;

    return ResponseFactory.createDemeterAuthResponse(status, message, token);
  }

  static jsonToDemeterUserResponse(jsonData: any): IDemeterUserResponse {
    const status: string = jsonData.status;
    const message: string = jsonData.message;
    const users: IUser[] = jsonData.users;
    return ResponseFactory.createDemeterUserResponse(status, message, users);
  }
  static jsonToDemeterConfigurationResponse(jsonData: any): IDemeterConfigurationResponse {
    const status: string = jsonData.status;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterConfigurationResponse(status, message);
  }
  static jsonToDemeterAlimentResponse(jsonData: any): IDemeterAlimentResponse {
    const status: string = jsonData.status;
    const message: string = jsonData.message;
    const aliment: IAliment = jsonData.aliment;
    return ResponseFactory.createDemeterAlimentResponse(status, message, aliment);
  }
  static jsonToDemeterRecipeResponse(jsonData: any): IDemeterRecipeResponse {
    const status: string = jsonData.status;
    const message: string = jsonData.message;
    const recipe: IRecipe = jsonData.recipe;
    return ResponseFactory.createDemeterRecipeResponse(status, message, recipe);
  }
  static jsonToDemeterMealResponse(jsonData: any): IDemeterMealResponse {
    const status: string = jsonData.status;
    const message: string = jsonData.message;
    const meal: IMeal = jsonData.meal;
    return ResponseFactory.createDemeterMealResponse(status, message, meal);
  }
}

export default ResponseHandler;
