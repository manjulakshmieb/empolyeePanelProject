import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeComponent } from './employee.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCreationComponent,
    EmployeeComponent

  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
