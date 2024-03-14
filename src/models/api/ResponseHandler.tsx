import { IDemeterConfigurationResponse } from './response/DemeterConfigurationResponse';
import { IDemeterLoginResponse } from './response/DemeterLoginResponse';
import { IDemeterResponse } from './response/DemeterResponse';
import { IDemeterUpdateUserResponse } from './response/DemeterUpdateUserResponse';
import { IDemeterSignUpResponse } from './response/DemeterSignUpResponse';
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

  static jsonToDemeterUpdateUserResponse(jsonData: any): IDemeterUpdateUserResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterUpdateUserResponse(success, message);
  }
  static jsonToDemeterConfigurationResponse(jsonData: any): IDemeterConfigurationResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterConfigurationResponse(success, message);
  }
  static jsonToDemeterSignUpResponse(jsonData: any): IDemeterSignUpResponse {
    const success: boolean = jsonData.success;
    const message: string = jsonData.message;

    return ResponseFactory.createDemeterSignUpResponse(success, message);
  }
}

export default ResponseHandler;
