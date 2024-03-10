export interface IDemeterResponse {
  getSuccess(): boolean;
  setSuccess(isSuccess: boolean): void;

  getMessage(): string;
  setMessage(message: string): void;
}

export class DemeterResponse implements IDemeterResponse {
  private success: boolean;
  private message: string;

  constructor(success: boolean, message: string) {
    this.success = success;
    this.message = message;
  }

  getSuccess(): boolean {
    return this.success;
  }

  setSuccess(success: boolean) {
    this.success = success;
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }
}
