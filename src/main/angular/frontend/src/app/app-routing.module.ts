import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {StudentsComponent} from './students/students.component';
import {ProfessorsComponent} from './professors/professors.component';
import {ClubsComponent} from './clubs/clubs.component';
import {ClubsViewComponent} from "./clubs-view/clubs-view.component";
import {EstablishmentComponent} from "./establishment/establishment.component";
import {DepartmentComponent} from "./department/department.component";
import {BranchComponent} from "./branch/branch.component";
import {ElementComponent} from "./element/element.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'structure', component: HomeComponent},
  {path: 'admin/students', component: StudentsComponent},
  {path: 'admin/professors', component: ProfessorsComponent},
  {path: 'admin/clubs', component: ClubsComponent},
  {path: 'clubs', component: ClubsViewComponent},
  {path: 'establishments', component: EstablishmentComponent},
  {path: 'establishments/:id', component: EstablishmentComponent},
  {path: 'departments', component: DepartmentComponent},
  {path: 'departments/:id', component: DepartmentComponent},
  {path: 'branches', component: BranchComponent},
  {path: 'branches/:id', component: BranchComponent},
  {path: 'elements', component: ElementComponent},
  {path: 'elements/:id', component: ElementComponent},
  {path: '**', component: DashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
