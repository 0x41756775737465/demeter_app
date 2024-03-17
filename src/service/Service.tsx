import ResponseFactory from '../models/api/ResponseFactory';
import ResponseHandler from '../models/api/ResponseHandler';
import { API_URL } from '@env';
import { IDemeterResponse } from '../models/api/response/DemeterResponse';
import { IDemeterRequest } from '../models/api/request/DemeterRequest';
import { IUser } from '../models/api/data/User';
import RequestFactory from '../models/api/RequestFactory';

export interface IService {
  create<T extends IDemeterRequest>(request: T): Promise<T>;
  update<T extends IDemeterRequest>(request: T): Promise<T>;
  delete<T extends IDemeterRequest>(request: T): Promise<T>;
  getBaseURL(): string;
  getEndoint(): string;
  call<T extends IDemeterRequest, U extends IDemeterResponse>(
    request: T,
    method: string
  ): Promise<U>;
}
export class Service implements IService {
  public static GET: string = 'GET';
  public static CREATE: string = 'POST';
  public static UPDATE: string = 'PUT';
  public static DELETE: string = 'DELETE';
  public static METHODS: string[] = [Service.GET, Service.CREATE, Service.UPDATE, Service.DELETE];

  public static BASE_URL: string = `${API_URL}`;
  private ENDPOINT: string;
  private URL: string;
  private user: IUser;
  private request: IDemeterRequest;

  constructor(endpoint: string, user: IUser) {
    this.ENDPOINT = `${endpoint}`;
    this.URL = `${API_URL}${this.ENDPOINT}`;
    this.user = user;
    this.request = RequestFactory.createDemeterRequest();
  }
  get<T extends IDemeterRequest>(request: T): Promise<T> {
    throw new Error('get() method must be implemented');
  }
  create<T extends IDemeterRequest>(request: T): Promise<T> {
    throw new Error('create() method must be implemented');
  }
  update<T extends IDemeterRequest>(request: T): Promise<T> {
    throw new Error('update() method must be implemented');
  }
  delete<T extends IDemeterRequest>(request: T): Promise<T> {
    throw new Error('delete() method must be implemented');
  }

  async call<T extends IDemeterRequest, U extends IDemeterResponse>(
    request: T,
    method: string,
    serializer: any
  ): Promise<U> {
    console.log('CALLING : ', this.URL);
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
        console.log('jsonData', jsonData);
        let demeterRecipeResponse = serializer(jsonData);

        return demeterRecipeResponse;
      })
      .catch((error) => {
        console.log('error', error);
        return ResponseFactory.createDemeterResponse('ko', error.getMessage());
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

  getMethods(): string[] {
    return Service.METHODS;
  }
}
