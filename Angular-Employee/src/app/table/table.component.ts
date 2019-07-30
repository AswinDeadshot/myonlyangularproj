import { Component, OnInit } from '@angular/core';
import employee from '../Data/employee.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  employees=employee;
  ngOnInit() {
  }
  delete(i){
    console.log("before delete",this.employees)
    this.employees.splice(i,1)
    console.log("after delete" ,this.employees)
  }
  // update(i){

  // }
}
