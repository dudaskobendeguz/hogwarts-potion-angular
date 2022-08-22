import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {IngredientService} from "../../service/ingredient/ingredient.service";
import {MessageService} from "../../service/message/message.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  public ingredients: Ingredient[] = [];

  constructor(
    private ingredientService: IngredientService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  private getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
        this.messageService.add(IngredientService.name, 'getIngredients: ingredients fetched')
      });
  }
}
