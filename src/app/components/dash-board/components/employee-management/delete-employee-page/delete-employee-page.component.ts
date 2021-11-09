import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../../../services/employee.service";

@Component({
  selector: 'app-delete-employee-page',
  templateUrl: './delete-employee-page.component.html',
  styleUrls: ['./delete-employee-page.component.scss']
})
export class DeleteEmployeePageComponent implements OnInit {

  employeeForm = new FormGroup({
    empId: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ])
  });

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  uploadData(){

    this._employeeService.deleteEmployee(this.employeeForm.get('empId')?.value,).subscribe(response => {
      alert('Deleted Successfully..');
      this.employeeForm.reset();
    }, error => {
      console.log(error)
    })
  }

}
