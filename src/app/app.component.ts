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
        "pincode": 590002,
        "Temp": true,
      },

      "myOfficeAddressObject": {
        "City": 'Ballari',
        "pincode": 583101
      }
    }

  };



  myLevels = [1, 2, 3, 4, 5];
  myLevelsObjects = [{}, {}, {}, {}, {}]

  arrayFunctions() {
    const array = [
      {
        name: 'name1',
        rollNo: 1,
        marks: 36,
        address: {
          home: {

          },
          office: {

          }
        }
      },
      {
        name: 'name2',
        rollNo: 2,
        marks: 30,
        address: {
          home: {

          },
          office: {

          }
        }
      },
      {
        name: 'name3',
        rollNo: 3,
        marks: 50,
        address: {
          home: {

          },
          office: {

          }
        }
      }
    ];

    array.forEach(ele => {
      if (ele.rollNo % 2) {
        console.log(ele.address.office)
      };
    });

    for (var i = 0; i < array.length; i++) {
      let currentObj = array[i];
      let currentRollNumber = currentObj.rollNo;
      if (currentRollNumber % 2) {
        console.log(currentObj.address.office);
      }

    }


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
