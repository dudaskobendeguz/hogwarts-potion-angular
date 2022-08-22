import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../../model/student";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {MessageService} from "../../../service/message/message.service";
import {StudentService} from "../../../service/user/student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() detailedStudent?: Student;

  constructor(
    private messageService: MessageService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .subscribe((student) => {
        this.detailedStudent = student;
        this.messageService.add(StudentDetailsComponent.name, `getStudent: student(${id}) fetched`);
      });
  }
}
