import ResponseFactory from '../models/api/ResponseFactory';
import ResponseHandler from '../models/api/ResponseHandler';
import { API_URL } from '@env';
import { IDemeterResponse } from '../models/api/response/DemeterResponse';
import { IDemeterRequest } from '../models/api/request/DemeterRequest';
import { IDemeterSignUpRequest } from '../models/api/request/DemeterSignUpRequest';
import { IDemeterSignUpResponse } from '../models/api/response/DemeterSignUpResponse';

export interface IService {
  create(): Promise<IDemeterRequest>;
  update(): Promise<IDemeterRequest>;
  delete(): Promise<IDemeterRequest>;
  getBaseURL(): string;
  getEndoint(): string;
  call(request: IDemeterRequest, method: string): Promise<IDemeterResponse>;
}
export class Service implements IService {
  private BASE_URL: string;
  private ENDPOINT: string;
  private URL: string;
  private user: IUser;

  constructor(endpoint: string, user: IUser) {
    this.BASE_URL = `${API_URL}`;
    this.ENDPOINT = `${endpoint}`;
    this.URL = `${API_URL}${this.ENDPOINT}`;
    this.user = user;
  }
  create(): Promise<IDemeterRequest> {
    throw new Error('create() method must be implemented');
  }
  update(): Promise<IDemeterRequest> {
    throw new Error('update() method must be implemented');
  }
  delete(): Promise<IDemeterRequest> {
    throw new Error('delete() method must be implemented');
  }

  async call(request: IDemeterRequest, method: string): Promise<IDemeterResponse> {
    return await fetch(this.URL, {
      method: method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getUser().getToken()}`,
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterRecipeResponse: IDemeterResponse =
          ResponseHandler.jsonToDemeterRecipeResponse(jsonData);

        return demeterRecipeResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterResponse(false, error.getMessage());
      });
  }

  getUser(): IUser {
    return this.user;
  }

  getBaseURL(): string {
    return this.BASE_URL;
  }
  getEndoint(): string {
    return this.ENDPOINT;
  }
  static async createConfiguration(
    request: IDemeterConfigurationRequest
  ): Promise<IDemeterConfigurationResponse | IDemeterResponse> {
    return await fetch(`${API_URL}/configuration`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterConfigurationResponse: IDemeterConfigurationResponse =
          ResponseHandler.jsonToDemeterConfigurationResponse(jsonData);

        return demeterConfigurationResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterUpdateUserResponse(false, error.getMessage());
      });
  }

  static async signUp(
    request: IDemeterSignUpRequest
  ): Promise<IDemeterSignUpResponse | IDemeterResponse> {
    return await fetch(`${API_URL}/signup`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterLoginResponse: IDemeterSignUpResponse =
          ResponseHandler.jsonToDemeterSignUpResponse(jsonData);

        return demeterLoginResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterResponse(false, error.getMessage());
      });
  }
}
