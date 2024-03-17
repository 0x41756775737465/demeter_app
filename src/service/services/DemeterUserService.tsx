import { IDemeterUserRequest } from '../../models/api/request/DemeterUserRequest';
import { IUser } from '../../models/api/data/User';
import { IService, Service } from '../Service';
import { IDemeterUserResponse } from '../../models/api/response/DemeterUserResponse';

export interface IDemeterUserService extends IService {}

export class DemeterUserService extends Service implements IDemeterUserService {
  constructor(user: IUser) {
    super('User', user);
  }
  get(request: IDemeterUserRequest): Promise<IDemeterUserResponse> {
    return this.call(request, Service.GET);
  }
  create(request: IDemeterUserRequest): Promise<IDemeterUserResponse> {
    return this.call(request, Service.CREATE);
  }
  update(request: IDemeterUserRequest): Promise<IDemeterUserResponse> {
    return this.call(request, Service.UPDATE);
  }
  delete(request: IDemeterUserRequest): Promise<IDemeterUserResponse> {
    return this.call(request, Service.DELETE);
  }
}
