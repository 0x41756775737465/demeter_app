import { IDemeterConfigurationRequest } from '../../models/api/request/DemeterConfigurationRequest';
import { IUser } from '../../models/api/data/User';
import { IService, Service } from '../Service';
import { IDemeterConfigurationResponse } from '../../models/api/response/DemeterConfigurationResponse';

export interface IDemeterConfigurationService extends IService {}

export class DemeterConfigurationService extends Service implements IDemeterConfigurationService {
  constructor(user: IUser) {
    super('configuration', user);
  }
  get(request: IDemeterConfigurationRequest): Promise<IDemeterConfigurationResponse> {
    return this.call(request, Service.GET);
  }
  create(request: IDemeterConfigurationRequest): Promise<IDemeterConfigurationResponse> {
    return this.call(request, Service.CREATE);
  }
  update(request: IDemeterConfigurationRequest): Promise<IDemeterConfigurationResponse> {
    return this.call(request, Service.UPDATE);
  }
  delete(request: IDemeterConfigurationRequest): Promise<IDemeterConfigurationResponse> {
    return this.call(request, Service.DELETE);
  }
}
