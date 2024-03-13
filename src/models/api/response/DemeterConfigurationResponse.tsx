import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterConfigurationResponse extends IDemeterResponse {}

export class DemeterConfigurationResponse
  extends DemeterResponse
  implements IDemeterConfigurationResponse
{
  constructor(success: boolean, message: string) {
    super(success, message);
  }
}
