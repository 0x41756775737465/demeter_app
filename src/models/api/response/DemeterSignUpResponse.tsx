import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterSignUpResponse extends IDemeterResponse {}

export class DemeterSignUpResponse extends DemeterResponse implements IDemeterSignUpResponse {
  constructor(success: boolean, message: string) {
    super(success, message);
  }
}
