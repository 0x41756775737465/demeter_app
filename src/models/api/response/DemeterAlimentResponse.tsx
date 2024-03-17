import { IAliment } from '../data/Aliment';
import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterAlimentResponse extends IDemeterResponse {
  getAliment(): IAliment;
  setAliment(aliment: IAliment): void;
}

export class DemeterAlimentResponse extends DemeterResponse implements IDemeterAlimentResponse {
  private aliment: IAliment;

  constructor(status: string, message: string, aliment: IAliment) {
    super(status, message);
    this.aliment = aliment;
  }

  getAliment(): IAliment {
    return this.aliment;
  }

  setAliment(aliment: IAliment) {
    this.aliment = aliment;
  }
}
