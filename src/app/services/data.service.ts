import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employeeArray:any[]=[]
  constructor() { }

  deleteData(index:any){
    let emp:any = localStorage.getItem('employeeDetails') 
    this.employeeArray= JSON.parse(emp)
    this.employeeArray.splice(index,1)
    localStorage.setItem('employeeDetails',JSON.stringify(this.employeeArray))
  }

  dataSave(data:any){
    let emp:any = localStorage.getItem('employeeDetails') 
    this.employeeArray= JSON.parse(emp)
    this.employeeArray.push(data)
    localStorage.setItem('employeeDetails',JSON.stringify(this.employeeArray))
  }
  
}
