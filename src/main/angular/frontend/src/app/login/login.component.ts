import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  error = false;
  constructor(private app: AppComponent, private http: HttpClient, private router: Router) {

  }

  login(credentials) {
    if (!credentials.email || credentials.email.trim() === '' || !credentials.password || credentials.password.trim() === ''){
      this.error = true;
      return;
    }
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password) });
    this.http.get(this.app.path + 'person/login', {headers, responseType: 'text' as 'json'}).
    subscribe(value => {
      if (value){
        if (typeof value === 'string') {
          const v = JSON.parse(value);
          v.password = credentials.password;
          localStorage.setItem('user', JSON.stringify(v));
          this.router.navigate(['/home']).then(r => {if (r) {this.app.isToggled = true; }});
        }
      }
      else { this.error = true; }
    }, error => { console.log(error) ; this.error = true; });
  }

}
