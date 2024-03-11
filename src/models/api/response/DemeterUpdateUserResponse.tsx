import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterUpdateUserResponse extends IDemeterResponse {}

export class DemeterUpdateUserResponse
  extends DemeterResponse
  implements IDemeterUpdateUserResponse
{
  constructor(success: boolean, message: string) {
    super(success, message);
  }
}
