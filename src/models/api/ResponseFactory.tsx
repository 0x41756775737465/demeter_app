import { DemeterLoginResponse, IDemeterLoginResponse } from './response/DemeterLoginResponse';
import { DemeterResponse, IDemeterResponse } from './response/DemeterResponse';

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
}

export default ResponseFactory;
