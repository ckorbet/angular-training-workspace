import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServie } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServie]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
