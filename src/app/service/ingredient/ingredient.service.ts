import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";
import {catchError, Observable, tap} from "rxjs";
import {Ingredient} from "../../model/ingredient";
import {ErrorHandlingService} from "../errorhandling/errorhandling/error-handling.service";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private ingredientsUrl: string = 'http://localhost:8080/api/ingredient'
  private httpOptions: {} = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private messageService: MessageService,
    private errorHandler: ErrorHandlingService,
    private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrl)
      .pipe(
        tap((_) => this.log('getIngredients(TAP)')),
        catchError(this.errorHandler.handleError<Ingredient[]>('getIngredients', []))
      );
  }

  private log(message: string) {
    this.messageService.add(IngredientService.name, message);
  }
}
