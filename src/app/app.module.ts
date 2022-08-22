import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './component/students/students/students.component';
import {HttpClientModule} from "@angular/common/http";
import { MessageComponent } from './component/message/message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomsComponent } from './component/rooms/rooms/rooms.component';
import { IngredientsComponent } from './component/ingredients/ingredients.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { PotionsComponent } from './component/potions/potions.component';
import { StudentComponent } from './component/students/student/student.component';
import { RoomComponent } from './component/rooms/room/room.component';

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
