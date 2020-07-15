import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessorsComponent } from './professors/professors.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsViewComponent } from './clubs-view/clubs-view.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { DepartmentComponent } from './department/department.component';
import { BranchComponent } from './branch/branch.component';
import { ElementComponent } from './element/element.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StudentsComponent,
    ProfessorsComponent,
    ClubsComponent,
    ClubsViewComponent,
    EstablishmentComponent,
    DepartmentComponent,
    BranchComponent,
    ElementComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents(null),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

