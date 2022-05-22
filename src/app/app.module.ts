import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CarManagementComponent } from './car-management/car-management.component';
import { PartsComponent } from './parts/parts.component';
import { StaffsComponent } from './staffs/staffs.component';
import { BillManagementComponent } from './bill-management/bill-management.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationFormComponent,
    CarManagementComponent,
    PartsComponent,
    StaffsComponent,
    BillManagementComponent
  ],
  imports: [
    TagInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
