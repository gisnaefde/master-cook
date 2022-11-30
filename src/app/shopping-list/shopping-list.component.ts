import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 5),
  ];

  onIngredientAdded (ingredient :Ingredient){
    this.ingredients.push(ingredient); //ingredient ditambahkan ke ingredients

  }

}

// export class ShoppingListComponent implements OnInit{
//   ingredients=[];

//   constructor(){}

//   ngOnInit(){

//   }
// }
