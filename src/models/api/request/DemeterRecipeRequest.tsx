import { DemeterRequest } from './DemeterRequest';
import { IDemeterRecipeResponse } from '../response/DemeterRecipeResponse';
import { IDemeterResponse } from '../response/DemeterResponse';
import RequestFactory from '../RequestFactory';
import { IRecipe } from '../data/Recipe';

export interface IDemeterRecipeRequest extends DemeterRequest {
  getResponse(): IDemeterRecipeResponse | IDemeterResponse | undefined;
  setResponse(response: IDemeterRecipeResponse | IDemeterResponse): void;

  clone(): IDemeterRecipeRequest;
}

export class DemeterRecipeRequest extends DemeterRequest implements IDemeterRecipeRequest {
  private response: IDemeterRecipeResponse | IDemeterResponse | undefined;
  private recipe: IRecipe;
  constructor(recipe: IRecipe) {
    super();
    this.recipe = recipe;
    this.response = undefined;
  }

  getRecipe(): IRecipe {
    return this.recipe;
  }

  setRecipe(recipe: IRecipe) {
    this.recipe = recipe;
  }

  getResponse(): IDemeterRecipeResponse | IDemeterResponse | undefined {
    return this.response;
  }

  setResponse(response: IDemeterRecipeResponse | IDemeterResponse): void {
    this.response = response;
  }

  validate(): void {
    this.setValide();
  }
  clone(): IDemeterRecipeRequest {
    let newObject = RequestFactory.createDemeterRecipeRequest(this.getRecipe());
    newObject.setMessage(this.getMessage());
    if (this.isValide()) {
      newObject.setValide();
    } else {
      newObject.setInValide();
    }
    return newObject;
  }
}
