import { IConfiguration } from '../data/Configuration';
import { IUser } from '../data/User';
import {
  DemeterConfigurationRequest,
  IDemeterConfigurationRequest,
} from './request/DemeterConfigurationRequest';
import { IAliment } from '../data/Aliment';
import { DemeterAlimentRequest, IDemeterAlimentRequest } from './request/DemeterAlimentRequest';
import { DemeterLoginRequest, IDemeterLoginRequest } from './request/DemeterLoginRequest';
import { DemeterRequest, IDemeterRequest } from './request/DemeterRequest';
import {
  DemeterUpdateUsereRequest,
  IDemeterUpdateUserRequest,
} from './request/DemeterUpdateUserRequest';
import { DemeterSignUpRequest, IDemeterSignUpRequest } from './request/DemeterSignUpRequest';

class RequestFactory {
  static createDemeterRequest(): IDemeterRequest {
    return new DemeterRequest();
  }
  static createDemeterLoginRequest(
    username: string,
    email: string,
    password: string
  ): IDemeterLoginRequest {
    return new DemeterLoginRequest(username, email, password);
  }
  static createDemeterUpdateUserRequest(user: IUser): IDemeterUpdateUserRequest {
    return new DemeterUpdateUsereRequest(user);
  }
  static createDemeterConfigurationRequest(
    user: IUser,
    configuration: IConfiguration
  ): IDemeterConfigurationRequest {
    return new DemeterConfigurationRequest(user, configuration);
  }
  static createDemeterSignUpRequest(
    username: string,
    email: string,
    password: string,
    repeatPassword: string
  ): IDemeterSignUpRequest {
    return new DemeterSignUpRequest(username, email, password, repeatPassword);
  }

  static createDemeterAlimentRequest(aliment: IAliment): IDemeterAlimentRequest {
    return new DemeterAlimentRequest(aliment);
  }
}

export default RequestFactory;
