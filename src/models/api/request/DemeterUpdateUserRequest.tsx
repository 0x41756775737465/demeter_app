import { DemeterRequest } from './DemeterRequest';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';
import { IUser } from '../../data/User';
import { IDemeterUpdateUserResponse } from '../response/DemeterUpdateUserResponse';

export interface IDemeterUpdateUserRequest extends DemeterRequest {
  getUser(): IUser;
  setUser(user: IUser): void;

  getResponse(): IDemeterUpdateUserResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterUpdateUserResponse | IDemeterResponse): void;

  submit(): void;

  clone(): IDemeterUpdateUserRequest;
}

export class DemeterUpdateUsereRequest extends DemeterRequest implements IDemeterUpdateUserRequest {
  private user: IUser;
  private response: IDemeterUpdateUserResponse | IDemeterResponse | undefined;

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

  getResponse(): IDemeterUpdateUserResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterUpdateUserResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();
  }
  clone(): IDemeterUpdateUserRequest {
    let newObject = RequestFactory.createDemeterUpdateUserRequest(this.getUser());
    newObject.setMessage(this.getMessage());
    if (this.isValide()) {
      newObject.setValide();
    } else {
      newObject.setInValide();
    }
    return newObject;
  }
  async submit() {
    this.validate();
    if (this.isValide()) {

    }
  }
}
