import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterAuthResponse extends IDemeterResponse {
  getToken(): string;
  setToken(token: string): void;
}

export class DemeterAuthResponse extends DemeterResponse implements IDemeterAuthResponse {
  private token: string;

  constructor(status: string, message: string, token: string) {
    super(status, message);
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }
}
