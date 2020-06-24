import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {StudentsComponent} from './students/students.component';
import {ProfessorsComponent} from './professors/professors.component';
import {ClubsComponent} from './clubs/clubs.component';
import {ClubsViewComponent} from "./clubs-view/clubs-view.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin/students', component: StudentsComponent},
  {path: 'admin/professors', component: ProfessorsComponent},
  {path: 'admin/clubs', component: ClubsComponent},
  {path: 'clubs', component: ClubsViewComponent},
  {path: '**', component: HomeComponent},
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
