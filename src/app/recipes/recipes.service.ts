import {EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [ //ini dibuat privat
    new Recipe ('A test Recipe One',
    'This is a simply Test One',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg',
    [
      new Ingredient('Meat' ,1),
      new Ingredient('French Fries' ,20),
    ]
     ),
    new Recipe ('A test Recipe Two',
    'This is a simply Test Two',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg',
    [
      new Ingredient ('Buns' , 2),
      new Ingredient ('Meat' , 2),
    ]
     )
  ];

  getRecipes(){ //unutk mengembalikan array
    return this.recipes.slice(); //slice digunakan untuk menyalin ke array baru
  }
}
