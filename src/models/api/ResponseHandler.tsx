import { IDemeterConfigurationResponse } from './response/DemeterConfigurationResponse';
import { IAliment } from '../data/Aliment';
import { IDemeterLoginResponse } from './response/DemeterLoginResponse';
import { IDemeterAlimentResponse } from './response/DemeterAlimentResponse';
import { IAliment } from '../data/Aliment';
import { IDemeterLoginResponse } from './response/DemeterLoginResponse';
import { IDemeterAlimentResponse } from './response/DemeterLoginResponse copy';
import { IDemeterResponse } from './response/DemeterResponse';
import { IDemeterUpdateUserResponse } from './response/DemeterUpdateUserResponse';
import { IDemeterSignUpResponse } from './response/DemeterSignUpResponse';
import ResponseFactory from './ResponseFactory';
import { IRecipe } from '../data/Recipe';
import { IDemeterRecipeResponse } from './response/DemeterRecipeResponse';

class ResponseHandler {
  static jsonToDemeterResponse(jsonData: any): IDemeterResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterResponse(success, message);
  }

  static jsonToDemeterLoginResponse(jsonData: any): IDemeterLoginResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;
    const token: string = jsonData.token;

    return ResponseFactory.createDemeterLoginResponse(success, message, token);
  }

  static jsonToDemeterUpdateUserResponse(jsonData: any): IDemeterUpdateUserResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterUpdateUserResponse(success, message);
  }
  static jsonToDemeterConfigurationResponse(jsonData: any): IDemeterConfigurationResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterConfigurationResponse(success, message);
  }
  static jsonToDemeterSignUpResponse(jsonData: any): IDemeterSignUpResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterSignUpResponse(success, message);
  }
  static jsonToDemeterAlimentResponse(jsonData: any): IDemeterAlimentResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;
    const aliment: IAliment = jsonData.aliment;
    return ResponseFactory.createDemeterAlimentResponse(success, message, aliment);
  }
  static jsonToDemeterRecipeResponse(jsonData: any): IDemeterRecipeResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;
    const recipe: IRecipe = jsonData.recipe;
    return ResponseFactory.createDemeterRecipeResponse(success, message, recipe);
  }
}

export default ResponseHandler;
