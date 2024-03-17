import { IUser } from '../models/api/data/User';
import { IDemeterAlimentService, DemeterAlimentService } from './services/DemeterAlimentService';
import {
  IDemeterConfigurationService,
  DemeterConfigurationService,
} from './services/DemeterConfigurationService';
import { IDemeterAuthService, DemeterAuthService } from './services/DemeterAuthService';
import { IDemeterMealService, DemeterMealService } from './services/DemeterMealService';
import { IDemeterRecipeService, DemeterRecipeService } from './services/DemeterRecipeService';

export class ServiceFactory {
  static createDemeterAlimentService(user: IUser): IDemeterAlimentService {
    return new DemeterAlimentService(user);
  }
  static createDemeterConfigurationService(user: IUser): IDemeterConfigurationService {
    return new DemeterConfigurationService(user);
  }
  static createDemeterAuthService(user: IUser): IDemeterAuthService {
    return new DemeterAuthService(user);
  }
  static createDemeterMealService(user: IUser): IDemeterMealService {
    return new DemeterMealService(user);
  }
  static createDemeterRecipeService(user: IUser): IDemeterRecipeService {
    return new DemeterRecipeService(user);
  }
}
