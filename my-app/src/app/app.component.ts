import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // show : boolean;

//  message : string;

//  courseReg(courseName: string)
//  {
//    this.message=`Your Registration for ${courseName} is successful`;
//  }

//===============================================================================

sortOption : string ="";

productList : any = [
  {productName: 'samsung', price:370000},
  {productName: 'Apple', price:570000},
  {productName: 'Nokia', price:270000},
  {productName: 'Redmi', price:170000},
];

}
