import { IDemeterMealRequest } from '../../models/api/request/DemeterMealRequest';
import { IUser } from '../../models/api/data/User';
import { IService, Service } from '../Service';
import { IDemeterMealResponse } from '../../models/api/response/DemeterMealResponse';

export interface IDemeterMealService extends IService {}

export class DemeterMealService extends Service implements IDemeterMealService {
  constructor(user: IUser) {
    super('meal', user);
  }
  get(request: IDemeterMealRequest): Promise<IDemeterMealResponse> {
    return this.call(request, Service.GET);
  }
  create(request: IDemeterMealRequest): Promise<IDemeterMealResponse> {
    return this.call(request, Service.CREATE);
  }
  update(request: IDemeterMealRequest): Promise<IDemeterMealResponse> {
    return this.call(request, Service.UPDATE);
  }
  delete(request: IDemeterMealRequest): Promise<IDemeterMealResponse> {
    return this.call(request, Service.DELETE);
  }
}
