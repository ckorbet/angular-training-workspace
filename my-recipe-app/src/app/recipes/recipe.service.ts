import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeServie {
  private recipes: Recipe[] = [
    new Recipe('Big Fat burguer', 'What else need to say?', 'https://www.fatburgercanada.com/wp-content/uploads/2015/07/king-burger-541x633.png',
    [
      new Ingredient('Meat', 2),
      new Ingredient('Bread', 2),
      new Ingredient('Cheese', 4)
    ]),
    new Recipe('Strudel', 'Appply pie', 'https://i.ytimg.com/vi/OKaCR6Y1XO0/maxresdefault.jpg',
    [
      new Ingredient('Apple', 4),
      new Ingredient('Sugar', 2)
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService : ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
