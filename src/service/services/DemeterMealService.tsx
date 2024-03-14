import { IDemeterMealRequest } from '../../models/api/request/DemeterMealRequest';
import { IUser } from '../../models/data/User';
import { IService, Service } from '../Service';

export interface IDemeterMealService extends IService {}

export class DemeterMealService extends Service implements IDemeterMealService {
  constructor(user: IUser) {
    super('meal', user);
  }
  create(): Promise<IDemeterMealRequest> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<IDemeterMealRequest> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<IDemeterMealRequest> {
    throw new Error('Method not implemented.');
  }
}
