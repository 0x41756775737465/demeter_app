import { IUser } from './User.tsx';
import { DataFactory } from './DataFactory.tsx';

export class DataHandler {
  static jsonToUser(jsonData: any): IUser {
    const id = jsonData.id || 0;
    const email = jsonData.email || '';
    const token = jsonData.token || '';
    const name = jsonData.name || '';
    const firstname = jsonData.firstname || '';
    const username = jsonData.username || '';
    return DataFactory.createUser(id, email, token, name, firstname, username);
  }
}
