import { IDemeterConfigurationRequest } from '../../models/api/request/DemeterConfigurationRequest';
import { IUser } from '../../models/data/User';
import { IService, Service } from '../Service';

export interface IDemeterConfigurationService extends IService {}

export class DemeterConfigurationService extends Service implements IDemeterConfigurationService {
  constructor(user: IUser) {
    super('configuration', user);
  }
  create(): Promise<IDemeterConfigurationRequest> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<IDemeterConfigurationRequest> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<IDemeterConfigurationRequest> {
    throw new Error('Method not implemented.');
  }
}
