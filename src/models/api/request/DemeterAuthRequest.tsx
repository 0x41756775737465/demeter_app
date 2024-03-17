import { isValidEmail, isValidPassword } from '../../../utils/validators';
import { DemeterRequest } from './DemeterRequest';
import { IDemeterAuthResponse } from '../response/DemeterAuthResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';

export interface IDemeterAuthRequest extends DemeterRequest {
  getEmail(): string;
  setEmail(email: string): void;

  getUsername(): string;
  setUsername(password: string): void;

  getPassword(): string;
  setPassword(password: string): void;

  getResponse(): IDemeterAuthResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterAuthResponse | IDemeterResponse): void;

  clone(): IDemeterAuthRequest;
}

export class DemeterAuthRequest extends DemeterRequest implements IDemeterAuthRequest {
  private username: string;
  private email: string;
  private password: string;
  private response: IDemeterAuthResponse | IDemeterResponse | undefined;

  constructor(username: string, email: string, password: string) {
    super();
    this.username = username;
    this.email = email;
    this.password = password;
    this.response = undefined;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getResponse(): IDemeterAuthResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterAuthResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();

    if (!isValidPassword(this.getPassword())) {
      this.setInValide();

      this.setMessage('Votre mot de passe est incorrect');
    }

    if (!isValidEmail(this.getEmail())) {
      this.setInValide();

      this.setMessage('Votre adresse email est incorrect');
    }
  }
  clone(): IDemeterAuthRequest {
    let newObject = RequestFactory.createDemeterAuthRequest(
      this.getUsername(),
      this.getEmail(),
      this.getPassword()
    );
    newObject.setResponse(this.getResponse());
    newObject.setMessage(this.getMessage());
    if (this.isValide()) {
      newObject.setValide();
    } else {
      newObject.setInValide();
    }
    return newObject;
  }
}
