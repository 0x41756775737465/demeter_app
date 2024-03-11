import { DemeterRequest } from './DemeterRequest';
import { IDemeterLoginResponse } from '../response/DemeterLoginResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';
import { IDemeterAlimentResponse } from '../response/DemeterLoginResponse copy';
import { IAliment } from '../../data/Aliment';

export interface IDemeterAlimentRequest extends DemeterRequest {
  getAliment(): IAliment;
  setAliment(aliment: IAliment): void;

  getResponse(): IDemeterAlimentResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterAlimentResponse | IDemeterResponse): void;

  submit(): void;

  clone(): IDemeterAlimentRequest;
}

export class DemeterAlimentRequest extends DemeterRequest implements IDemeterAlimentRequest {
  private aliment: IAliment;
  private response: IDemeterLoginResponse | IDemeterResponse | undefined;

  constructor(aliment: IAliment) {
    super();
    this.aliment = aliment;
    this.response = undefined;
  }
  getAliment(): IAliment {
    return this.aliment;
  }
  setAliment(aliment: IAliment): void {
    this.aliment = aliment;
  }

  getResponse(): IDemeterAlimentResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterAlimentResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();
  }
  clone(): IDemeterAlimentRequest {
    let newObject = RequestFactory.createDemeterAlimentRequest(this.getAliment());
    newObject.setMessage(this.getMessage());
    if (this.isValide()) {
      newObject.setValide();
    } else {
      newObject.setInValide();
    }
    return newObject;
  }
}
