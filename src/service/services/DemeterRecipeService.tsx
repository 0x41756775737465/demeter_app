import { IDemeterRecipeRequest } from '../../models/api/request/DemeterRecipeRequest';
import { IUser } from '../../models/data/User';
import { IService, Service } from '../Service';

export interface IDemeterRecipeService extends IService {}

export class DemeterRecipeService extends Service implements IDemeterRecipeService {
  constructor(user: IUser) {
    super('recipe', user);
  }
  create(): Promise<IDemeterRecipeRequest> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<IDemeterRecipeRequest> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<IDemeterRecipeRequest> {
    throw new Error('Method not implemented.');
  }
}
