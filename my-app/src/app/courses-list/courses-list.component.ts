import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  exportAs: 'courselist'
})
export class CoursesListComponent implements OnInit {
  constructor() {}

  @Output() onRegister = new EventEmitter<string>();
  courses = [];
  ngOnInit(): void {
    this.courses = [
      { courseID: 1, courseName: 'Angular' },
      { courseID: 2, courseName: 'Java' },
      { courseID: 3, courseName: 'Spring' },
      { courseID: 4, courseName: 'SpringBoot' },
    ];
  }

  // course: any[];

  // changeCourse(courseName: string)
  // {
  //   this.course=[];
  //   for(let i=0;i<this.courses.length;i++)
  //   {
  //     if(this.courses[i].courseName===courseName)
  //     {
  //       this.course.push(this.courses[i]);
  //     }
  //   }
  // }

  register(courseName: string)
  {
    this.onRegister.emit(courseName);
  }

}
