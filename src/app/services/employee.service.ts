import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import EmployeeDTO from "../dto/EmployeeDTO";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public saveEmployee(dto: EmployeeDTO): Observable<any>{
    return this.http.post('http://localhost:3002/api/v1/employeeRoute/saveEmployee', {
      empId: dto.empId,
      empName: dto.empName,
      designation: dto.designation,
      email: dto.email,
      contact: dto.contact,
      salary: dto.salary,
      gender: dto.gender,
      address: dto.address
    })
  }

  public updateEmployee(dto: EmployeeDTO): Observable<any>{
    return this.http.put('http://localhost:3002/api/v1/employeeRoute/updateEmployee', {
      empId: dto.empId,
      empName: dto.empName,
      designation: dto.designation,
      email: dto.email,
      contact: dto.contact,
      salary: dto.salary,
      gender: dto.gender,
      address: dto.address
    })
  }

  public deleteEmployee(empId: string): Observable<any>{
    return this.http.delete('http://localhost:3002/api/v1/employeeRoute/deleteEmployee', {
      headers:{empId}
    })
  }

  public searchEmployee(empId: string): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/employeeRoute/searchEmployee', {
      headers:{empId}
    })
  }

  public showAllEmployees(): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/employeeRoute/showAllEmployees');
  }

}
