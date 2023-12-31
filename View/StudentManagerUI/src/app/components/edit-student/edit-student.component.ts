import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  @Input() student?: Student;
  @Output() studentsUpdated = new EventEmitter<Student[]>();

  majors: string[] = ['Computer Science', 'Mathematics', 'Physics', 'Political Science', 'Art', 'History', 'Business', 'Philosophy'];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {}

  reloadPage() {
    window.location.reload();
  }

  createStudent(student: Student) {
    this.studentService
    .createStudent(student)
    .subscribe((students: Student[]) => 
    this.studentsUpdated.emit(students));
    
  }
  updateStudent(student: Student) {
    this.studentService
    .updateStudent(student)
    .subscribe((students: Student[]) => 
    this.studentsUpdated.emit(students));

  }
}
