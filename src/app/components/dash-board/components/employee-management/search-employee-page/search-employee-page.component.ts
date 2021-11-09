import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../../../services/employee.service";

@Component({
  selector: 'app-search-employee-page',
  templateUrl: './search-employee-page.component.html',
  styleUrls: ['./search-employee-page.component.scss']
})
export class SearchEmployeePageComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  dataSet : any;

  search(empId: string) {
    this.employeeService.searchEmployee(empId).subscribe(response => {
      this.dataSet = response.data;
    }, error => {
      console.log(error);
    })
  }

}
