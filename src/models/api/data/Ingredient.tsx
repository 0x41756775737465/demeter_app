import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { Aliment } from './Aliment';

export interface IIngredient {
  getAliment(): Aliment;
  setAliment(aliment: Aliment): void;

  getQuantity(): Float;
  setQuantity(quantity: Float): void;
}

export class Ingredient implements IIngredient {
  private aliment: Aliment;
  private quantity: Float;

  constructor(aliment: Aliment, quantity: Float) {
    this.aliment = aliment;
    this.quantity = quantity;
  }

  getAliment(): Aliment {
    return this.aliment;
  }
  setAliment(aliment: Aliment): void {
    this.aliment = aliment;
  }

  getQuantity(): Float {
    return this.quantity;
  }
  setQuantity(quantity: Float): void {
    this.quantity = quantity;
  }
}
