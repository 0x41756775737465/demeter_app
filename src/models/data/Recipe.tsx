import { IType, Type } from './Type';
import { IUser } from './User';
import { IIngredient } from './Ingredient';

export interface IRecipe extends IType {
  setType(type: IType): void;
  getType(): IType;

  addIngredient(ingredient: IIngredient): void;
  removeIngredient(ingredient: IIngredient): void;

  setListIngredient(ingredients: IIngredient[]): void;
  getListIngredient(): IIngredient[];
}

export class Recipe extends Type implements IRecipe {
  private type: IType;
  private ingredients: IIngredient[];

  constructor(id: number, name: string, creator: IUser, ingredients: IIngredient[], type: IType) {
    super(id, name, creator);
    this.ingredients = ingredients;

    this.type = type;
  }

  setType(type: IType): void {
    this.type = type;
  }
  getType(): IType {
    return this.type;
  }

  addIngredient(ingredient: IIngredient): void {
    this.ingredients.push(ingredient);
  }
  removeIngredient(ingredient: IIngredient): void {
    this.ingredients = this.ingredients.filter(function (elt) {
      return elt !== ingredient;
    });
  }

  setListIngredient(ingredients: IIngredient[]): void {
    this.ingredients = ingredients;
  }
  getListIngredient(): IIngredient[] {
    return this.ingredients;
  }
}
