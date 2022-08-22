import { Component, OnInit } from '@angular/core';
import {Student} from "../../../model/student";
import {StudentService} from "../../../service/user/student.service";
import {MessageService} from "../../../service/message/message.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];


  constructor(
    private studentService: StudentService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents():void {
    this.studentService.getStudents()
      .subscribe( students => {
        this.students = students;
        this.messageService.add(StudentsComponent.name, 'getStudents: students fetched');
      });
  }
}
