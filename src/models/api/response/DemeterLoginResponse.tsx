import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterLoginResponse extends IDemeterResponse {
  getToken(): string;
  setToken(token: string): void;
}

export class DemeterLoginResponse extends DemeterResponse implements IDemeterLoginResponse {
  private token: string;

  constructor(success: boolean, message: string, token: string) {
    super(success, message);
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }
}
