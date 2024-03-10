import ResponseFactory from '../models/api/ResponseFactory';
import ResponseHandler from '../models/api/ResponseHandler';
import { IDemeterLoginRequest } from '../models/api/request/DemeterLoginRequest';
import { IDemeterLoginResponse } from '../models/api/response/DemeterLoginResponse';
import { API_URL } from '@env';
import { IDemeterResponse } from '../models/api/response/DemeterResponse';

export class Services {
  static async login(
    request: IDemeterLoginRequest
  ): Promise<IDemeterLoginResponse | IDemeterResponse> {
    return await fetch(`${API_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        let demeterLoginResponse: IDemeterLoginResponse =
          ResponseHandler.jsonToDemeterLoginResponse(jsonData);

        return demeterLoginResponse;
      })
      .catch((error) => {
        return ResponseFactory.createDemeterResponse(false, error.getMessage());
      });
  }
}
