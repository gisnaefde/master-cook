import {EventEmitter} from '@angular/core';

import { Ingredient } from "../shared/ingredient.module";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 5),
  ];

  getIngredients(){
    return this.ingredients.slice(); //slice digunakan untuk menyalin ke array baru
  }

  addIngredients(ingredient : Ingredient) { // isi parameters nya yaitu newIngredient dari shopping-edit.component.ts
    this.ingredients.push(ingredient); //menambahkan data ke ingredient, tapi harus melakukan proses dibawah ini untuk menambhkan data
    this.ingredientsChanged.emit(this.ingredients.slice()); //parameter (this.ingredients.slice()) akan ditambahkan melalui eventEmitter ke dalam shopping list.component.ts
  }

}
