import { DemeterLoginRequest, IDemeterLoginRequest } from './request/DemeterLoginRequest';
import { DemeterRequest, IDemeterRequest } from './request/DemeterRequest';

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
}

export default RequestFactory;
