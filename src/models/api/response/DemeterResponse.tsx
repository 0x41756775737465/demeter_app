export interface IDemeterResponse {
  getStatus(): string;
  setStatus(status: string): void;

  isSuccess(): boolean;

  getMessage(): string;
  setMessage(message: string): void;
}

export class DemeterResponse implements IDemeterResponse {
  private status: string;
  private message: string;

  constructor(status: string, message: string) {
    this.status = status;
    this.message = message;
  }

  isSuccess(): boolean {
    return this.getStatus() === 'ok';
  }

  getStatus(): string {
    return this.status;
  }

  setStatus(status: string) {
    this.status = status;
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }
}
