import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeServie {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
