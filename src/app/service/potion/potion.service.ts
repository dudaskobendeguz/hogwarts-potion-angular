import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";
import {ErrorHandlingService} from "../errorhandling/errorhandling/error-handling.service";
import {catchError, Observable, tap} from "rxjs";
import {Potion} from "../../model/potion";

@Injectable({
  providedIn: 'root'
})
export class PotionService {
  private potionsUrl: string = 'http://localhost:8080/api/potion';
  private httpOptions: {} = {
    headers: new HttpHeaders({'Content-Type': 'application-json'})
  };

  constructor(
    private messageService: MessageService,
    private errorHandler: ErrorHandlingService,
    private http: HttpClient
  ) { }

  getPotions(): Observable<Potion[]> {
    return this.http.get<Potion[]>(this.potionsUrl)
      .pipe(
        tap((_) => this.log('getPotions(TAP)')),
        catchError(this.errorHandler.handleError<Potion[]>('getPotions', []))
      );
  }

  private log(message: string) {
    this.messageService.add(PotionService.name, message);
  }
}
