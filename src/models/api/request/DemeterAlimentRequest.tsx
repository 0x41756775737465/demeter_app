import { DemeterRequest } from './DemeterRequest';
import { IDemeterAuthResponse } from '../response/DemeterAuthResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';
import { IDemeterAlimentResponse } from '../response/DemeterAlimentResponse';
import { IAliment } from '../data/Aliment';

export interface IDemeterAlimentRequest extends DemeterRequest {
  getAliment(): IAliment;
  setAliment(aliment: IAliment): void;

  getResponse(): IDemeterAlimentResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterAlimentResponse | IDemeterResponse): void;

  clone(): IDemeterAlimentRequest;
}

export class DemeterAlimentRequest extends DemeterRequest implements IDemeterAlimentRequest {
  private aliment: IAliment;
  private response: IDemeterAuthResponse | IDemeterResponse | undefined;

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
