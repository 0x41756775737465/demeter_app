import ResponseFactory from '../models/api/ResponseFactory';
import ResponseHandler from '../models/api/ResponseHandler';
import { IDemeterLoginRequest } from '../models/api/request/DemeterLoginRequest';
import { IDemeterLoginResponse } from '../models/api/response/DemeterLoginResponse';
import { API_URL } from '@env';
import { IDemeterResponse } from '../models/api/response/DemeterResponse';
import { IDemeterAlimentRequest } from '../models/api/request/DemeterAlimentRequest';
import { IDemeterAlimentResponse } from '../models/api/response/DemeterAlimentResponse';
import { IDemeterRecipeRequest } from '../models/api/request/DemeterRecipeRequest';
import { IDemeterRecipeResponse } from '../models/api/response/DemeterRecipeResponse';
import { IDemeterAlimentResponse } from '../models/api/response/DemeterLoginResponse copy';
import { IDemeterMealRequest } from '../models/api/request/DemeterMealRequest';
import { IDemeterMealResponse } from '../models/api/response/DemeterMealResponse';

interface IService {
  static async create();
  static async update();
  static async delete();
  static getEndoint();
}
export class Services {
  static async login(
    request: IDemeterLoginRequest
  ): Promise<IDemeterLoginResponse | IDemeterResponse> {
    return await fetch(`${API_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterLoginResponse: IDemeterLoginResponse =
          ResponseHandler.jsonToDemeterLoginResponse(jsonData);

        return demeterLoginResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterResponse(false, error.getMessage());
      });
  }

  static async createAliment(
    request: IDemeterAlimentRequest
  ): Promise<IDemeterAlimentResponse | IDemeterResponse> {
    return await fetch(`${API_URL}/aliment`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterAlimentResponse: IDemeterAlimentResponse =
          ResponseHandler.jsonToDemeterAlimentResponse(jsonData);

        return demeterAlimentResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterResponse(false, error.getMessage());
      });
  }

  static async createRecipe(
    request: IDemeterRecipeRequest
  ): Promise<IDemeterRecipeResponse | IDemeterResponse> {
    return await fetch(`${API_URL}/recipe`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterRecipeResponse: IDemeterRecipeResponse =
          ResponseHandler.jsonToDemeterRecipeResponse(jsonData);

        return demeterRecipeResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterResponse(false, error.getMessage());
      });
  }

  static async createMeal(
    request: IDemeterMealRequest
  ): Promise<IDemeterMealResponse | IDemeterResponse> {
    return await fetch(`${API_URL}/meal`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterMealResponse: IDemeterMealResponse =
          ResponseHandler.jsonToDemeterMealResponse(jsonData);

        return demeterMealResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterResponse(false, error.getMessage());
      });
  }
}
