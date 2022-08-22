import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MessageService} from "../../message/message.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(private messageService: MessageService) { }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation: string, result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.messageService.add(ErrorHandlingService.name, `${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
