import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService){} //menyamakan

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients(); //menyalin data array dari function getRecipes yang ada di dalam recipes.service.ts

    this.slService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }


}


// export class ShoppingListComponent implements OnInit{
//   ingredients=[];

//   constructor(){}

//   ngOnInit(){

//   }
// }
