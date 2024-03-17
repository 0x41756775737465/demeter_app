import { IMeal } from '../data/Meal';
import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterMealResponse extends IDemeterResponse {
  getMeal(): IMeal;
  setMeal(Meal: IMeal): void;
}

export class DemeterMealResponse extends DemeterResponse implements IDemeterMealResponse {
  private Meal: IMeal;

  constructor(status: string, message: string, Meal: IMeal) {
    super(status, message);
    this.Meal = Meal;
  }

  getMeal(): IMeal {
    return this.Meal;
  }

  setMeal(Meal: IMeal) {
    this.Meal = Meal;
  }
}
