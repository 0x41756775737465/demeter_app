import { IRecipe } from '../data/Recipe';
import { DemeterResponse, IDemeterResponse } from './DemeterResponse';

export interface IDemeterRecipeResponse extends IDemeterResponse {
  getRecipe(): IRecipe;
  setRecipe(recipe: IRecipe): void;
}

export class DemeterRecipeResponse extends DemeterResponse implements IDemeterRecipeResponse {
  private recipe: IRecipe;

  constructor(status: string, message: string, recipe: IRecipe) {
    super(status, message);
    this.recipe = recipe;
  }

  getRecipe(): IRecipe {
    return this.recipe;
  }

  setRecipe(recipe: IRecipe) {
    this.recipe = recipe;
  }
}
