import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // show : boolean;

 message : string;

 courseReg(courseName: string)
 {
   this.message=`Your Registration for ${courseName} is successful`;
 }
}
