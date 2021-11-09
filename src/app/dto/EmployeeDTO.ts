export default class EmployeeDTO {
  public empId: string;
  public empName: string;
  public designation: string;
  public email: string;
  public contact: string;
  public salary: number;
  public gender: string;
  public address: string;


  constructor(empId: string, empName: string, designation: string, email: string, contact: string, salary: number, gender: string, address: string) {
    this.empId = empId;
    this.empName = empName;
    this.designation = designation;
    this.email = email;
    this.contact = contact;
    this.salary = salary;
    this.gender = gender;
    this.address = address;
  }
}
