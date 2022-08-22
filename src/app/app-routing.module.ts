import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./component/students/students/students.component";
import {RoomsComponent} from "./component/rooms/rooms/rooms.component";
import {IngredientsComponent} from "./component/ingredients/ingredients/ingredients.component";
import {RecipesComponent} from "./component/recipes/recipes.component";
import {PotionsComponent} from "./component/potions/potions.component";


const routes: Routes = [
  // {path: '', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'ingredients', component: IngredientsComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'potions', component: PotionsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
