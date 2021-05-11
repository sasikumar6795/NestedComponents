import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  constructor() {}
  courses = [];
  ngOnInit(): void {
    this.courses = [
      { courseID: 1, courseName: 'Angular' },
      { courseID: 2, courseName: 'Java' },
      { courseID: 2, courseName: 'Spring' },
      { courseID: 4, courseName: 'SpringBoot' },
    ];
  }
}
