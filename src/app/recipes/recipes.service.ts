import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes:Recipe[] = [ //ini dibuat privat
    new Recipe ('A test Recipe One', 'This is a simply Test One','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg' ),
    new Recipe ('A test Recipe Two', 'This is a simply Test Two','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg' )
  ];

  getRecipes(){ //unutk mengembalikan array
    return this.recipes.slice(); //slice digunakan untuk menyalin ke array baru
  }
}
