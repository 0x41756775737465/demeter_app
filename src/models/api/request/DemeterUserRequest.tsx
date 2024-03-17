import { DemeterRequest } from './DemeterRequest';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';
import { IUser } from '../data/User';
import { IDemeterUserResponse } from '../response/DemeterUserResponse';

export interface IDemeterUserRequest extends DemeterRequest {
  getUser(): IUser;
  setUser(user: IUser): void;

  getResponse(): IDemeterUserResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterUserResponse | IDemeterResponse): void;

  clone(): IDemeterUserRequest;
}

export class DemeterUserRequest extends DemeterRequest implements IDemeterUserRequest {
  private user: IUser;
  private response: IDemeterUserResponse | IDemeterResponse | undefined;

  constructor(user: IUser) {
    super();
    this.user = user;
    this.response = undefined;
  }

  getUser(): IUser {
    return this.user;
  }

  setUser(user: IUser): void {
    this.user = user;
  }

  getResponse(): IDemeterUserResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterUserResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();
  }
  clone(): IDemeterUserRequest {
    let newObject = RequestFactory.createDemeterUserRequest(this.getUser());
    newObject.setMessage(this.getMessage());
    if (this.isValide()) {
      newObject.setValide();
    } else {
      newObject.setInValide();
    }
    return newObject;
  }
}
