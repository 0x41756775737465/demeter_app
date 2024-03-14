import { isValidEmail, isValidPassword } from '../../../utils/validators';
import { DemeterRequest } from './DemeterRequest';
import { IDemeterSignUpResponse } from '../response/DemeterSignUpResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';

export interface IDemeterSignUpRequest extends DemeterRequest {
  getEmail(): string;
  setEmail(email: string): void;

  getUsername(): string;
  setUsername(password: string): void;

  getPassword(): string;
  setPassword(password: string): void;

  getRepeatPassword(): string;
  setRepeatPassword(repeatPassword: string): void;

  getResponse(): IDemeterSignUpResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterSignUpResponse | IDemeterResponse): void;

  submit(): void;

  clone(): IDemeterSignUpRequest;
}

export class DemeterSignUpRequest extends DemeterRequest implements IDemeterSignUpRequest {
  private username: string;
  private email: string;
  private password: string;
  private repeatPassword: string;
  private response: IDemeterSignUpResponse | IDemeterResponse | undefined;

  constructor(username: string, email: string, password: string, repeatPassword: string) {
    super();
    this.username = username;
    this.email = email;
    this.password = password;
    this.repeatPassword = repeatPassword;
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

  getRepeatPassword(): string {
    return this.repeatPassword;
  }

  setRepeatPassword(repeatPassword: string): void {
    this.repeatPassword = repeatPassword;
  }

  getResponse(): IDemeterSignUpResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterSignUpResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();

    if (!isValidPassword(this.getPassword())) {
      this.setInValide();

      this.setMessage('Votre mot de passe est incorrect');
    }

    if (this.getPassword() !== this.getRepeatPassword()) {
      this.setInValide();
      this.setMessage('password != repeat password');
    }

    if (!isValidEmail(this.getEmail())) {
      this.setInValide();

      this.setMessage('Votre adresse email est incorrect');
    }
  }
  clone(): IDemeterSignUpRequest {
    let newObject = RequestFactory.createDemeterSignUpRequest(
      this.getUsername(),
      this.getEmail(),
      this.getPassword(),
      this.getRepeatPassword()
    );
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
