/**
 * Created by sagar on 3/8/17.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employeeregistration',
  templateUrl: 'employeeregistration.html'
})

export class EmployeeRegistrationComponent implements OnInit {
  countryName:string;
  stateName:string;
  cityName:string;
  currentDate : Date = new Date();
  time : Date = new Date();

  constructor() {

  }
  getCountry(event:any){

  }
  getCity(event:any){

  }
  getState(event:any){

  }
  ngOnInit() { }
}
