import { IDemeterAuthRequest } from '../../models/api/request/DemeterAuthRequest';

import { IUser } from '../../models/api/data/User';
import { IService, Service } from '../Service';
import { IDemeterAuthResponse } from '../../models/api/response/DemeterAuthResponse';
import ResponseHandler from '../../models/api/ResponseHandler';

export interface IDemeterAuthService extends IService {}

export class DemeterAuthService extends Service implements IDemeterAuthService {
  constructor(user: IUser) {
    super('/login', user);
  }
  async get<IDemeterAuthRequest>(request: IDemeterAuthRequest): Promise<IDemeterAuthRequest> {
    let response: IDemeterAuthResponse = await this.call<IDemeterAuthRequest, IDemeterAuthResponse>(
      request,
      'GET',
      ResponseHandler.jsonToDemeterUserResponse
    );
    request.setResponse(response);
    return request;
  }
  async create<IDemeterAuthRequest>(request: IDemeterAuthRequest): Promise<IDemeterAuthRequest> {
    let response: IDemeterAuthResponse = await this.call<IDemeterAuthRequest, IDemeterAuthResponse>(
      request,
      'POST',
      ResponseHandler.jsonToDemeterAuthResponse
    );
    console.log('response', response);
    console.log('token', response.getToken());

    request.setResponse(response);
    return request;
  }
  async update<IDemeterAuthRequest>(request: IDemeterAuthRequest): Promise<IDemeterAuthRequest> {
    throw new Error('Method not implemented.');
  }
  async delete<IDemeterAuthRequest>(request: IDemeterAuthRequest): Promise<IDemeterAuthRequest> {
    let response: IDemeterAuthResponse = await this.call<IDemeterAuthRequest, IDemeterAuthResponse>(
      request,
      'DELETE',
      ResponseHandler.jsonToDemeterAuthResponse
    );
    console.log('response', response);

    request.setResponse(response);
    return request;
  }
}
