import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";
import {ErrorHandlingService} from "../errorhandling/errorhandling/error-handling.service";
import {catchError, Observable, tap} from "rxjs";
import {Recipe} from "../../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrl: string = 'http://localhost:8080/api/recipe'
  private httpOptions: {} = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private messageService: MessageService,
    private errorHandler: ErrorHandlingService,
    private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        tap((_) => this.log('getRecipes(TAP)')),
        catchError(this.errorHandler.handleError<Recipe[]>('getRecipes', []))
      );
  }

  private log(message: string) {
    this.messageService.add(RecipeService.name, message);
  }
}
