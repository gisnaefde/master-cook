import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

@Input() recipe:Recipe; //@input digunakan agar bisa mendapatkan data
@Input() index :number; //mengambil index dari recipe-list.component.html

}
