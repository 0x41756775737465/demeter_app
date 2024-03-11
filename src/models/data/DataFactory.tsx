import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { IType } from './Type';
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
  static createAliment(
    id: number,
    name: string,
    creator: IUser,
    type: IType,
    calories: Float,
    proteins: Float,
    fats: Float,
    carbohydrates: Float,
    fibers: Float
  ): IUser {
    return new User(id, name, creator, type, calories, proteins, fats, carbohydrates, fibers);
  }
}
