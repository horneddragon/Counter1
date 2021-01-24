import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'counter1';
  myName: string = 'Ani';
  City: string = 'Belagavi';
  gpa: number = 9;
  isindiancitizen: boolean = true;


  myUserObject: any = {
    "title": 'counter1',
    "myName": 'Ani',
    "gpa": 9,
    "isindiancitizen": true,
    "myAddressesObject": {

      "myHomeAddressObject": {
        "City": 'Belagavi',
        "pincode": 590002
      },

      "myOfficeAddressObject": {
        "City": 'Ballari',
        "pincode": 583101
      }
    }

  };



  myLevels = [1, 2, 3, 4, 5];

  constructor() {

  }

  test() {
    let obj = {
      "title": 'counter1',
      "myName": 'Ani',
      "City": 'Belagavi',
      "gpa": 9,
      "isindiancitizen": true,
    };
  }
}
