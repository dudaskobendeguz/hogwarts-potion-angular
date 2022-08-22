import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './component/students/students/students.component';
import {HttpClientModule} from "@angular/common/http";
import { MessageComponent } from './component/message/message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomsComponent } from './component/rooms/rooms/rooms.component';
import { IngredientsComponent } from './component/ingredients/ingredients/ingredients.component';
import { RecipesComponent } from './component/recipes/recipes/recipes.component';
import { PotionsComponent } from './component/potions/potions/potions.component';
import { StudentComponent } from './component/students/student/student.component';
import { RoomComponent } from './component/rooms/room/room.component';
import { IngredientComponent } from './component/ingredients/ingredient/ingredient.component';
import { RecipeComponent } from './component/recipes/recipe/recipe.component';
import { PotionComponent } from './component/potions/potion/potion.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    MessageComponent,
    RoomsComponent,
    IngredientsComponent,
    RecipesComponent,
    PotionsComponent,
    StudentComponent,
    RoomComponent,
    IngredientComponent,
    RecipeComponent,
    PotionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
