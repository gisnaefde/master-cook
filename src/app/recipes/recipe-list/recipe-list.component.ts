import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes:Recipe[];


  constructor(private recepeService: RecipeService){} //menyamakan

  ngOnInit(): void {
    this.recipes = this.recepeService.getRecipes(); //menyalin data array dari function getRecipes yang ada di dalam recipes.service.ts
  }

}
