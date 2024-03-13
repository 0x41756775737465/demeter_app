import { DemeterRequest } from './DemeterRequest';
import { Services } from '../../../services/Services';
import { IDemeterConfigurationResponse } from '../response/DemeterConfigurationResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';
import { IUser } from '../../data/User';
import { IConfiguration } from '../../data/Configuration';

export interface IDemeterConfigurationRequest extends DemeterRequest {
  getConfiguration(): IConfiguration;
  setConfiguration(configuration: IConfiguration): void;

  getUser(): IUser;
  setUser(user: IUser): void;

  getResponse(): IDemeterConfigurationResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterConfigurationResponse | IDemeterResponse): void;

  submit(): void;

  clone(): IDemeterConfigurationRequest;
}

export class DemeterConfigurationRequest
  extends DemeterRequest
  implements IDemeterConfigurationRequest
{
  private configuration: IConfiguration;
  private user: IUser;
  private response: IDemeterConfigurationResponse | IDemeterResponse | undefined;

  constructor(user: IUser, configuration: IConfiguration) {
    super();
    this.user = user;
    this.configuration = configuration;
    this.response = undefined;
  }

  getConfiguration(): IConfiguration {
    return this.configuration;
  }

  setConfiguration(configuration: IConfiguration) {
    this.configuration = configuration;
  }

  getUser(): IUser {
    return this.user;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  getResponse(): IDemeterConfigurationResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterConfigurationResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();
  }
  clone(): IDemeterConfigurationRequest {
    let newObject = RequestFactory.createDemeterConfigurationRequest(
      this.getUser(),
      this.getConfiguration()
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
        const response = await Services.createConfiguration(this);

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
