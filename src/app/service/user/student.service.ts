import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Student} from "../../model/student";
import {MessageService} from "../message/message.service";
import {ErrorHandlingService} from "../errorhandling/errorhandling/error-handling.service";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private usersUrl: string = 'http://localhost:8080/api/student';
  private httpOptions: {} = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private messageService: MessageService,
    private errorHandler: ErrorHandlingService,
    private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.usersUrl)
      .pipe(
        tap( _ => this.log('getStudents(TAP)')),
        catchError(this.errorHandler.handleError<Student[]>('getStudents', []))
      );
  }

  getStudent(id: number): Observable<Student> { {
    const url = `${this.usersUrl}/${id}`
    return this.http.get<Student>(url)
      .pipe(
        tap( (_) => this.log(`fethed student id=${id}(TAP)`)),
        catchError(this.errorHandler.handleError<Student>(`getHero id=${id}`))
      );
  }

  }

  private log(message: string): void {
    this.messageService.add(StudentService.name, message);
  }
}
