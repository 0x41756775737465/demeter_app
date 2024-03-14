import ResponseFactory from '../models/api/ResponseFactory';
import ResponseHandler from '../models/api/ResponseHandler';
import { API_URL } from '@env';
import { IDemeterResponse } from '../models/api/response/DemeterResponse';
import { IDemeterRequest } from '../models/api/request/DemeterRequest';

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
}
