import { IUser } from '../data/User';
import { DemeterLoginRequest, IDemeterLoginRequest } from './request/DemeterLoginRequest';
import { DemeterRequest, IDemeterRequest } from './request/DemeterRequest';
import {
  DemeterUpdateUsereRequest,
  IDemeterUpdateUserRequest,
} from './request/DemeterUpdateUserRequest';

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
}

export default RequestFactory;
