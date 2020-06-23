import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {StudentsComponent} from "./students/students.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin/students', component: StudentsComponent},
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
