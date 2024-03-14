import { IUser } from '../models/data/User';
import { IDemeterAlimentService, DemeterAlimentService } from './services/DemeterAlimentService';
import {
  IDemeterConfigurationService,
  DemeterConfigurationService,
} from './services/DemeterConfigurationService';
import { IDemeterLoginService, DemeterLoginService } from './services/DemeterLoginService';
import { IDemeterMealService, DemeterMealService } from './services/DemeterMealService';
import { IDemeterRecipeService, DemeterRecipeService } from './services/DemeterRecipeService';

export class ServiceFactory {
  static createDemeterAlimentService(user: IUser): IDemeterAlimentService {
    return new DemeterAlimentService(user);
  }
  static createDemeterConfigurationService(user: IUser): IDemeterConfigurationService {
    return new DemeterConfigurationService(user);
  }
  static createDemeterLoginService(user: IUser): IDemeterLoginService {
    return new DemeterLoginService(user);
  }
  static createDemeterMealService(user: IUser): IDemeterMealService {
    return new DemeterMealService(user);
  }
  static createDemeterRecipeService(user: IUser): IDemeterRecipeService {
    return new DemeterRecipeService(user);
  }
}
