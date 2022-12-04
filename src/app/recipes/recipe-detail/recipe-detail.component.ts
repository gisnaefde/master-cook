import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe:Recipe;
  id : number;

  constructor (private recipeService : RecipeService,
               private route: ActivatedRoute,
               private router : Router){
               }
   ngOnInit(){
  this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRepice(this.id); //unutk mendapatkan index array dari recipe service yang akan di tampilkan
  })   }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);//addIngredientsToShoppingList merupakan function yang ada di recipe.service.ts.  ...  this.recipe.ingredients merupakan data yang diambil dari recipe
  }

  onEditRepice(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
