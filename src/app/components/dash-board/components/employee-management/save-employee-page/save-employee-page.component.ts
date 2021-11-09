import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../../../services/employee.service";
import EmployeeDTO from "../../../../../dto/EmployeeDTO";

@Component({
  selector: 'app-save-employee-page',
  templateUrl: './save-employee-page.component.html',
  styleUrls: ['./save-employee-page.component.scss']
})
export class SaveEmployeePageComponent implements OnInit {

  employeeForm = new FormGroup({
    empId: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ]),
    empName: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(50)
    ]),
    designation: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(50)
    ]),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    contact: new FormControl('', [
      Validators.required, Validators.minLength(10), Validators.maxLength(15)
    ]),
    salary: new FormControl('', [
      Validators.required
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(25)
    ]),
  });

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  uploadData(){
    const dto = new EmployeeDTO(
      this.employeeForm.get('empId')?.value,
      this.employeeForm.get('empName')?.value,
      this.employeeForm.get('designation')?.value,
      this.employeeForm.get('email')?.value,
      this.employeeForm.get('contact')?.value,
      this.employeeForm.get('salary')?.value,
      this.employeeForm.get('gender')?.value,
      this.employeeForm.get('address')?.value,
    );
    this._employeeService.saveEmployee(dto).subscribe(response => {
      alert('Saved Successfully');
      this.employeeForm.reset();
    }, error => {
      console.log(error)
    })
  }

}
