
import { Component, ViewChild, AfterViewInit, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { MatTableDataSource } from '@angular/material/table';
//import { MatPaginator } from '@angular/material/paginator';

import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { sampleData } from 'src/app/models/sampleStudents';



@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css']
})
export class DisplayStudentsComponent {
  title = 'StudentManagerUI';
  students: Student[] = [];
  studentToEdit?: Student;
  studentToDelete?: Student;
  selectedMajor: string = "";
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dob', 'age', 'major', 'gpa', 'edit', 'delete'];
 
  //majors: string[] = ['Computer Science', 'Mathematics', 'Physics', 'Political Science', 'Art', 'History', 'Business', 'Philosophy'];
  
  dataSource!: MatTableDataSource<Student>;

  @ViewChild('paginator') paginator! : MatPaginator;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(response => {
      this.dataSource =  new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  updateStudentList(students: Student[]) {
    this.students = students;
  }

  initNewStudent() {
    this.studentToEdit = new Student();
  }

  fillWithSampleData() {
    for (const student of sampleData) {
      this.studentService.createStudent(student).subscribe(response => {
        this.students = sampleData;
      });
    }
  }
  
  editThisStudent(student: Student) {
    this.studentToEdit = student;
  }
  
  deleteThisStudent(student: Student) {
    this.studentService
    .deleteStudent(student)
    .subscribe((result: Student[]) =>
    (this.students = result));
  }

 
  // filterStudentsByMajor() {
  //   this.students = this.students.filter((student) => {
  //     return student.major === this.selectedMajor;
  //   });
  // }

  reloadPage() {
    window.location.reload();
  }
}
