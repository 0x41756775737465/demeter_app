import { isValidEmail, isValidPassword } from '../../../utils/validators';
import { DemeterRequest } from './DemeterRequest';
import { Services } from '../../../services/Services';
import { IDemeterLoginResponse } from '../response/DemeterLoginResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';

export interface IDemeterLoginRequest extends DemeterRequest {
  getEmail(): string;
  setEmail(email: string): void;

  getUsername(): string;
  setUsername(password: string): void;

  getPassword(): string;
  setPassword(password: string): void;

  getResponse(): IDemeterLoginResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterLoginResponse | IDemeterResponse): void;

  submit(): void;

  clone(): IDemeterLoginRequest;
}

export class DemeterLoginRequest extends DemeterRequest implements IDemeterLoginRequest {
  private username: string;
  private email: string;
  private password: string;
  private response: IDemeterLoginResponse | IDemeterResponse | undefined;

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

  getResponse(): IDemeterLoginResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterLoginResponse | IDemeterResponse): void {
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
  clone(): IDemeterLoginRequest {
    let newObject = RequestFactory.createDemeterLoginRequest(
      this.getUsername(),
      this.getEmail(),
      this.getPassword()
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
      try {
        const response = await Services.login(this);

        this.setResponse(response);
        if (response.getSuccess()) {
          this.setMessage(`SUCCESS : ${response.getMessage()}`);
        } else {
          this.setMessage(`ERROR : ${response.getMessage()}`);
        }
      } catch (error) {
        this.setMessage(`ERROR : ${error}`);
      }
    }
  }
}
