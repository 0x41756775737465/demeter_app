import { IDemeterLoginResponse } from './response/DemeterLoginResponse';
import { IDemeterResponse } from './response/DemeterResponse';
import ResponseFactory from './ResponseFactory';

class ResponseHandler {
  static jsonToDemeterResponse(jsonData: any): IDemeterResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterResponse(success, message);
  }

  static jsonToDemeterLoginResponse(jsonData: any): IDemeterLoginResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;
    const token: string = jsonData.token;

    return ResponseFactory.createDemeterLoginResponse(success, message, token);
  }
}

export default ResponseHandler;
