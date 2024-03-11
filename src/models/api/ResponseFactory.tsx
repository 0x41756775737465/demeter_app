import {
  DemeterConfigurationResponse,
  IDemeterConfigurationResponse,
} from './response/DemeterConfigurationResponse';
import { IAliment } from '../data/Aliment';
import { DemeterLoginResponse, IDemeterLoginResponse } from './response/DemeterLoginResponse';
import { DemeterAlimentResponse, IDemeterAlimentResponse } from './response/DemeterAlimentResponse';
import { IAliment } from '../data/Aliment';
import { DemeterLoginResponse, IDemeterLoginResponse } from './response/DemeterLoginResponse';
import {
  DemeterAlimentResponse,
  IDemeterAlimentResponse,
} from './response/DemeterLoginResponse copy';
import { DemeterResponse, IDemeterResponse } from './response/DemeterResponse';
import {
  DemeterUpdateUserResponse,
  IDemeterUpdateUserResponse,
} from './response/DemeterUpdateUserResponse';
import { DemeterSignUpResponse, IDemeterSignUpResponse } from './response/DemeterSignUpResponse';
import { IRecipe } from '../data/Recipe';
import { DemeterRecipeResponse, IDemeterRecipeResponse } from './response/DemeterRecipeResponse';

class ResponseFactory {
  static createDemeterResponse(success: boolean, message: string): IDemeterResponse {
    return new DemeterResponse(success, message);
  }
  static createDemeterLoginResponse(
    success: boolean,
    message: string,
    token: string
  ): IDemeterLoginResponse {
    return new DemeterLoginResponse(success, message, token);
  }
  static createDemeterUpdateUserResponse(
    success: boolean,
    message: string
  ): IDemeterUpdateUserResponse {
    return new DemeterUpdateUserResponse(success, message);
  }
  static createDemeterConfigurationResponse(
    success: boolean,
    message: string
  ): IDemeterConfigurationResponse {
    return new DemeterConfigurationResponse(success, message);
  }
  static createDemeterSignUpResponse(success: boolean, message: string): IDemeterSignUpResponse {
    return new DemeterSignUpResponse(success, message);
  }

  static createDemeterAlimentResponse(
    success: boolean,
    message: string,
    aliment: IAliment
  ): IDemeterAlimentResponse {
    return new DemeterAlimentResponse(success, message, aliment);
  }
  static createDemeterRecipeResponse(
    success: boolean,
    message: string,
    recipe: IRecipe
  ): IDemeterRecipeResponse {
    return new DemeterRecipeResponse(success, message, recipe);
  }
}

export default ResponseFactory;
