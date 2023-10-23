import { Component, ViewChild, AfterViewInit, SimpleChanges } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';
import { MatTableDataSource } from '@angular/material/table';
//import { MatPaginator } from '@angular/material/paginator';

import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'StudentManagerUI';

}
