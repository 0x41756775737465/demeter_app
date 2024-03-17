import { IUser } from '../data/User';
import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterUserResponse extends IDemeterResponse {}

export class DemeterUserResponse extends DemeterResponse implements IDemeterUserResponse {
  private users: IUser[];

  constructor(status: string, message: string, users: IUser[]) {
    super(status, message);
    this.users = users;
  }

  public getUsers(): IUser[] {
    return this.users;
  }

  public setUsers(users: IUser[]) {
    this.users = users;
  }

  public getUser(index: number) {
    return this.users[index];
  }

  public setUser(index: number, user: IUser) {
    this.users[index] = user;
  }
}
