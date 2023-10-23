import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Chart, registerables } from 'chart.js/auto';
//Chart.register(...registerables);

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})


export class GraphsComponent {

  students: Student[] = [];
  public chart: any;

  constructor(private studentService: StudentService) { }

  ngOnInit() {

    this.studentService.getStudents().subscribe(response => {
      this.students = response;
      this.createBarChart();
      this.createPieChart();
    });
  }

  getCount(myMajor: string) {
    return this.students.filter(student => student.major === myMajor).length;
  }
  
  getAvgGpaByMajor(myMajor: string) {
    let totalGPA = 0;
    let studentCount = 0;
  
    this.students.forEach(student => {
      if (student.major === myMajor) {
        totalGPA += student.gpa;
        studentCount++;
      }
    });
    
    const avgGPA = totalGPA / studentCount;
    return avgGPA;
  }

  createBarChart() {
    this.chart = new Chart("gpaByMajor", {
      type: 'bar',
      data: {
        labels: [
          'Computer Science',
          'Mathematics',
          'Physics',
          'Political Science',
          'Art',
          'History',
          'Business',
          'Philosophy'],
        datasets: [
          {
            label: "Avg. GPA by Major",
            data: [
              this.getAvgGpaByMajor('Computer Science'),
              this.getAvgGpaByMajor('Mathematics'),
              this.getAvgGpaByMajor('Physics'),
              this.getAvgGpaByMajor('Political Science'),
              this.getAvgGpaByMajor('Art'),
              this.getAvgGpaByMajor('History'),
              this.getAvgGpaByMajor('Business'),
              this.getAvgGpaByMajor('Philosophy')],
            backgroundColor: 'blue'
          },
        ]
      },
      options: { aspectRatio: 2.5 }

    });
  }
  createPieChart() {
    this.chart = new Chart("studentsByMajor", {
      type: 'pie',
      data: {
        labels: [
          'Computer Science',
          'Mathematics',
          'Physics',
          'Political Science',
          'Art',
          'History',
          'Business',
          'Philosophy'],
        datasets: [{
          label: 'Students',
          data: [
            this.getCount('Computer Science'),
            this.getCount('Mathematics'),
            this.getCount('Physics'),
            this.getCount('Political Science'),
            this.getCount('Art'),
            this.getCount('History'),
            this.getCount('Business'),
            this.getCount('Philosophy')],
          backgroundColor: [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'violet',
            'brown'
          ],
        }]
      }
    });
  }
}
