import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../../../services/employee.service";

@Component({
  selector: 'app-show-all-employees-page',
  templateUrl: './show-all-employees-page.component.html',
  styleUrls: ['./show-all-employees-page.component.scss']
})
export class ShowAllEmployeesPageComponent implements OnInit {

  employees:any[] = [];

  constructor(private _service : EmployeeService) { }

  ngOnInit(): void {

    this._service.showAllEmployees().subscribe(response => {
      this.employees = response.data;
    }, error => {
      console.log(error);
    })
  }
}
