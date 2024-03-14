import { IDemeterAlimentRequest } from '../../models/api/request/DemeterAlimentRequest';
import { IUser } from '../../models/data/User';
import { IService, Service } from '../Service';

export interface IDemeterAlimentService extends IService {}

export class DemeterAlimentService extends Service implements IDemeterAlimentService {
  constructor(user: IUser) {
    super('aliment', user);
  }
  create(): Promise<IDemeterAlimentRequest> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<IDemeterAlimentRequest> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<IDemeterAlimentRequest> {
    throw new Error('Method not implemented.');
  }
}
