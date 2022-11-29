import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe ('A test Recipe One', 'This is a simply Test One','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg' ),
    new Recipe ('A test Recipe Two', 'This is a simply Test Two','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg' )
  ];


  constructor(){}

  ngOnInit(): void {

  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
