import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isToggled = false;
  path ='http://localhost:8082/';
  constructor(public router: Router) {
    if(!this.isAuthenticated()) this.router.navigate(['/login']).then(r => console.log(r));
    this.isToggled = this.isAuthenticated();
  }

  logout() {
    this.isToggled = false;
    localStorage.removeItem('user');
  }
  getCurrentUser(){
    let auth=null;
    if (localStorage.getItem('user')) auth = localStorage.getItem('user');
    console.log(JSON.parse(auth));
    return JSON.parse(auth);
  }
  isAuthenticated(){
    return localStorage.getItem('user') != null;
  }
}
