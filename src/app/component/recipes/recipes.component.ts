import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../model/recipe";
import {MessageService} from "../../service/message/message.service";
import {RecipeService} from "../../service/recipe/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(
    private messageService: MessageService,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.messageService.add(RecipesComponent.name, 'getRecipes: recipes fetched');
        });
  }
}
