import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[] = [
    new Recipe ('A test Recipe', 'This is a simply Test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg' ),
    new Recipe ('A test Recipe', 'This is a simply Test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-803x1024.jpg' )
  ];

  constructor(){}

  ngOnInit(): void {

  }

}
