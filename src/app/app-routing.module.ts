import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillManagementComponent } from './bill-management/bill-management.component';
import { CarManagementComponent } from './car-management/car-management.component';
import { LoginComponent } from './login/login.component';
import { PartsComponent } from './parts/parts.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StaffsComponent } from './staffs/staffs.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Registration',
    component: RegistrationFormComponent
  },
  {
    path: 'Cars',
    component:CarManagementComponent
  },
  {
    path: 'Parts',
    component: PartsComponent
  },
  {
    path: 'Staffs',
    component: StaffsComponent
  },
  {
    path: 'Bill',
    component: BillManagementComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
