import { DemeterRequest } from './DemeterRequest';
import { IDemeterMealResponse } from '../response/DemeterMealResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';
import { IMeal } from '../data/Meal';

export interface IDemeterMealRequest extends DemeterRequest {
  getResponse(): IDemeterMealResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterMealResponse | IDemeterResponse): void;
  getMeal(): IMeal;
  setMeal(Meal: IMeal): void;
  clone(): IDemeterMealRequest;
}

export class DemeterMealRequest extends DemeterRequest implements IDemeterMealRequest {
  private response: IDemeterMealResponse | IDemeterResponse | undefined;
  private meal: IMeal;
  constructor(meal: IMeal) {
    super();
    this.meal = meal;
    this.response = undefined;
  }

  getMeal(): IMeal {
    return this.meal;
  }

  setMeal(Meal: IMeal) {
    this.meal = Meal;
  }

  getResponse(): IDemeterMealResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterMealResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();
  }
  clone(): IDemeterMealRequest {
    let newObject = RequestFactory.createDemeterMealRequest(this.getMeal());
    newObject.setMessage(this.getMessage());
    if (this.isValide()) {
      newObject.setValide();
    } else {
      newObject.setInValide();
    }
    return newObject;
  }
}
