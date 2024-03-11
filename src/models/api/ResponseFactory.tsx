import { DemeterLoginResponse, IDemeterLoginResponse } from './response/DemeterLoginResponse';
import { DemeterResponse, IDemeterResponse } from './response/DemeterResponse';
import {
  DemeterUpdateUserResponse,
  IDemeterUpdateUserResponse,
} from './response/DemeterUpdateUserResponse';

class ResponseFactory {
  static createDemeterResponse(success: boolean, message: string): IDemeterResponse {
    return new DemeterResponse(success, message);
  }
  static createDemeterLoginResponse(
    success: boolean,
    message: string,
    token: string
  ): IDemeterLoginResponse {
    return new DemeterLoginResponse(success, message, token);
  }
  static createDemeterUpdateUserResponse(
    success: boolean,
    message: string
  ): IDemeterUpdateUserResponse {
    return new DemeterUpdateUserResponse(success, message);
  }
}

export default ResponseFactory;
