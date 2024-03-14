import { IDemeterLoginRequest } from '../../models/api/request/DemeterLoginRequest';
import { IUser } from '../../models/data/User';
import { IService, Service } from '../Service';

export interface IDemeterLoginService extends IService {}

export class DemeterLoginService extends Service implements IDemeterLoginService {
  constructor(user: IUser) {
    super('login', user);
  }
  create(): Promise<IDemeterLoginRequest> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<IDemeterLoginRequest> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<IDemeterLoginRequest> {
    throw new Error('Method not implemented.');
  }
}
