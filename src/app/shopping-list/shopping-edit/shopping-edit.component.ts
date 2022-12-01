import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput',{static:false})nameInputRef : ElementRef //mengoper referensi lokal (nameInput (dari form)) dengan viewchild
  @ViewChild('amountInput',{static:false})amountInputRef : ElementRef

   constructor(private slService : ShoppingListService ) { }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value; //menangkap value dari form yang diisikan
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredients(newIngredient); //addIngredients merupakan function di shopping-list.service.ts
  }
}
