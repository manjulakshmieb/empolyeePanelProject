import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeArray:any=[]
  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  constructor(private empService:DataService) { }

  ngOnInit(): void {
    let emp:any = localStorage.getItem('employeeDetails') 
    this.employeeArray= JSON.parse(emp)
  }


  delete(index:any){
    this.empService.deleteData(index)
    let emp:any = localStorage.getItem('employeeDetails') 
    this.employeeArray= JSON.parse(emp)
  }

  onSearch() {
    if(this.searchText==''){
      let emp:any = localStorage.getItem('employeeDetails') 
      this.employeeArray= JSON.parse(emp)
      this.currentPage = 1;
    }else{
      this.employeeArray = this.employeeArray.filter((item:any) => {
        return Object.keys(item).some((key:any) => {
          const value = item[key].toString().toLowerCase();
          const search = this.searchText.toLowerCase();
          return value.includes(search);
        });
      });
    }

  }

  changePage(page: number) {
    const totalPages = this.totalPages;
    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
    }
  }

  get totalPages() {
    return Math.ceil(this.employeeArray.length / this.itemsPerPage);
  }
  
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.employeeArray.slice(startIndex, endIndex);
  }
}
