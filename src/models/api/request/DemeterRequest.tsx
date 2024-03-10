export interface IDemeterRequest {
  setValide(): void;
  setInValide(): void;
  isValide(): boolean;
  validate(): void;
  submit(): void;
  setMessage(message: string): void;
  getMessage(): string;
}

export class DemeterRequest implements IDemeterRequest {
  private message: string;
  private valide: boolean;

  constructor() {
    this.message = '';
    this.valide = false;
  }

  isValide(): boolean {
    return this.valide;
  }

  setValide(): void {
    this.valide = true;
  }

  setInValide(): void {
    this.valide = false;
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string): void {
    this.message = message;
  }

  submit() {
    throw new Error('submit() method must be implemented');
  }

  validate(): void {
    throw new Error('validate() method must be implemented');
  }
}
