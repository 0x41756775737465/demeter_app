import { IUser, User } from './User';

export class DataFactory {
  static createUser(
    id: number,
    email: string,
    token: string,
    name: string,
    firstname: string,
    username: string
  ): IUser {
    return new User(id, email, token, name, firstname, username);
  }
}
