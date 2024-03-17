import { IDemeterAlimentRequest } from '../../models/api/request/DemeterAlimentRequest';
import { IUser } from '../../models/api/data/User';
import { IService, Service } from '../Service';
import { IDemeterAlimentResponse } from '../../models/api/response/DemeterAlimentResponse';

export interface IDemeterAlimentService extends IService {}

export class DemeterAlimentService extends Service implements IDemeterAlimentService {
  constructor(user: IUser) {
    super('aliment', user);
  }
  override get(request: IDemeterAlimentRequest): Promise<IDemeterAlimentResponse> {
    return this.call(request, Service.GET);
  }
  create(request: IDemeterAlimentRequest): Promise<IDemeterAlimentResponse> {
    return this.call(request, Service.CREATE);
  }
  update(request: IDemeterAlimentRequest): Promise<IDemeterAlimentResponse> {
    return this.call(request, Service.UPDATE);
  }
  delete(request: IDemeterAlimentRequest): Promise<IDemeterAlimentResponse> {
    return this.call(request, Service.DELETE);
  }
}
