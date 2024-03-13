import { IType } from './Type';
import { IUser } from './User';
import { IIngredient } from './Ingredient';
import { IRecipe, Recipe } from './Recipe';

export interface IMeal extends IType {
  setType(type: IType): void;
  getType(): IType;

  addRecipe(recipe: IRecipe): void;
  removeRecipe(recipe: IRecipe): void;

  setListRecipe(recipes: IRecipe[]): void;
  getListRecipe(): IRecipe[];
}

export class Meal extends Recipe implements IMeal {
  private recipes: IRecipe[];
  constructor(
    id: number,
    name: string,
    creator: IUser,
    recipes: IRecipe[],
    ingredients: IIngredient[],
    type: IType
  ) {
    super(id, name, creator, ingredients, type);
    this.recipes = recipes;
  }

  addRecipe(recipe: IRecipe): void {
    this.recipes.push(recipe);
  }
  removeRecipe(recipe: IRecipe): void {
    this.recipes = this.recipes.filter(function (elt) {
      return elt !== recipe;
    });
  }

  setListRecipe(recipes: IRecipe[]): void {
    this.recipes = recipes;
  }
  getListRecipe(): IRecipe[] {
    return this.recipes;
  }
}
