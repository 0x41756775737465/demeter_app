import { IType } from './Type';
import { IUser } from './User';
import { IIngredient } from './Ingredient';
import { IRecipe, Recipe } from './Recipe';

export interface IMeal extends IType {
  setType(type: IType): void;
  getType(): IType;

  getDate(): Date;
  setDate(date: Date): void;

  addRecipe(recipe: IRecipe): void;
  removeRecipe(recipe: IRecipe): void;

  setListRecipe(recipes: IRecipe[]): void;
  getListRecipe(): IRecipe[];
}

export class Meal extends Recipe implements IMeal {
  private recipes: IRecipe[];
  private date: Date;
  constructor(
    id: number,
    name: string,
    creator: IUser,
    recipes: IRecipe[],
    ingredients: IIngredient[],
    type: IType,
    date: Date
  ) {
    super(id, name, creator, ingredients, type);
    this.recipes = recipes;
    this.date = date;
  }

  getDate(): Date {
    return this.date;
  }
  setDate(date: Date): void {
    this.date = date;
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
