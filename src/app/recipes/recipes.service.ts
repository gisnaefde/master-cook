import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";

@Injectable() //unutk mendapatkan servis shopping
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

  constructor (private slService : ShoppingListService){} //mengijeksi shoppinglist service

  getRecipes(){ //unutk mengembalikan array
    return this.recipes.slice(); //slice digunakan untuk menyalin ke array baru
  }

  getRepice(index:number) {
    return this.recipes[index]; //get index array
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredientss(ingredients);
  }

}
