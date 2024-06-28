import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule), canActivate: [AuthenticationGuard]},
  {path:'employee', loadChildren:()=> import('./employee/employee.module').then(m=>m.EmployeeModule), canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
