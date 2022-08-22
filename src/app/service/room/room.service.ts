import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";
import {ErrorHandlingService} from "../errorhandling/errorhandling/error-handling.service";
import {catchError, Observable, tap} from "rxjs";
import {Room} from "../../model/room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private roomsUrl: string = 'http://localhost:8080/api/room';
  private httpOptions: {} = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private messageService: MessageService,
    private errorHandler: ErrorHandlingService,
    private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl)
      .pipe(
        tap(_ => this.log('getRooms(TAP)')),
        catchError(this.errorHandler.handleError<Room[]>('getRooms', []))
      );
  }

  private log(message: string): void {
    this.messageService.add(RoomService.name, message);
  }
}
