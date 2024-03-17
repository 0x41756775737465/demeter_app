import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterConfigurationResponse extends IDemeterResponse {}

export class DemeterConfigurationResponse
  extends DemeterResponse
  implements IDemeterConfigurationResponse
{
  constructor(status: string, message: string) {
    super(status, message);
  }
}
