import { IDemeterRecipeRequest } from '../../models/api/request/DemeterRecipeRequest';
import { IUser } from '../../models/api/data/User';
import { IService, Service } from '../Service';
import { IDemeterRecipeResponse } from '../../models/api/response/DemeterRecipeResponse';

export interface IDemeterRecipeService extends IService {}

export class DemeterRecipeService extends Service implements IDemeterRecipeService {
  constructor(user: IUser) {
    super('recipe', user);
  }
  get(request: IDemeterRecipeRequest): Promise<IDemeterRecipeResponse> {
    return this.call(request, Service.GET);
  }
  create(request: IDemeterRecipeRequest): Promise<IDemeterRecipeResponse> {
    return this.call(request, Service.CREATE);
  }
  update(request: IDemeterRecipeRequest): Promise<IDemeterRecipeResponse> {
    return this.call(request, Service.UPDATE);
  }
  delete(request: IDemeterRecipeRequest): Promise<IDemeterRecipeResponse> {
    return this.call(request, Service.DELETE);
  }
}
