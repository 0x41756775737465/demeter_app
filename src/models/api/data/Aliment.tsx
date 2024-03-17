import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { IType, Type } from './Type';
import { IUser } from './User';

export interface IAliment extends IType {
  setType(type: IType): void;
  getType(): IType;

  setCalories(calories: Float): void;
  getCalories(): Float;

  setProteins(proteins: Float): void;
  getProteins(): Float;

  setFats(fats: Float): void;
  getFats(): Float;

  setCarbohydrates(carbohydrates: Float): void;
  getCarbohydrates(): Float;

  setFibers(fibers: Float): void;
  getFibers(): Float;
}

export class Aliment extends Type implements IAliment {
  private type;
  private calories;
  private proteins;
  private fats;
  private carbohydrates;
  private fibers;

  constructor(
    id: number,
    name: string,
    creator: IUser,
    type: IType,
    calories: Float,
    proteins: Float,
    fats: Float,
    carbohydrates: Float,
    fibers: Float
  ) {
    super(id, name, creator);
    this.type = type;
    this.calories = calories;
    this.proteins = proteins;
    this.fats = fats;
    this.carbohydrates = carbohydrates;
    this.fibers = fibers;
  }

  setType(type: IType): void {
    this.type = type;
  }
  getType(): IType {
    return this.type;
  }

  setCalories(calories: Float): void {
    this.calories = calories;
  }
  getCalories(): Float {
    return this.calories;
  }

  setProteins(proteins: Float): void {
    this.proteins = proteins;
  }
  getProteins(): Float {
    return this.proteins;
  }

  setFats(fats: Float): void {
    this.fats = fats;
  }
  getFats(): Float {
    return this.fats;
  }

  setCarbohydrates(carbohydrates: Float): void {
    this.carbohydrates = carbohydrates;
  }
  getCarbohydrates(): Float {
    return this.carbohydrates;
  }

  setFibers(fibers: Float): void {
    this.fibers = fibers;
  }
  getFibers(): Float {
    return this.fibers;
  }
}
