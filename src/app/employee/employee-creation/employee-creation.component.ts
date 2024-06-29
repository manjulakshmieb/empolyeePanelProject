import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrls: ['./employee-creation.component.scss']
})
export class EmployeeCreationComponent implements OnInit {
  creationForm!: FormGroup;
  employeeArray:any[]=[]

  constructor(private fb: FormBuilder,
    private router: Router,
    private data:DataService) { 
  }

  ngOnInit(): void {
    this.creationForm = this.fb.group({
      emp_name:  ['', [Validators.required, Validators.minLength(3)]],
      emp_email: ['', [Validators.required, Validators.email]],
      emp_contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emp_address: ['', Validators.required],
    });
  }

  // submit function for employeecreation
  onSubmit(): void {
    if (this.creationForm.valid) {
      alert("Form Submitted Suucessfully")
      this.router.navigate(['employee/employee-list']);
      let detail={
        emp_name:this.creationForm.value.emp_name,
        emp_email:this.creationForm.value.emp_email,
        emp_contact:this.creationForm.value.emp_contact,
        emp_address:this.creationForm.value.emp_address,
      }
      this.employeeDetailsSave(detail)
    }
  }

    // employee detail save function call from data service

  employeeDetailsSave(data:any){
     this.data.dataSave(data)
  }


}
