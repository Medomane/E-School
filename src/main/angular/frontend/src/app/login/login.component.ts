import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AppComponent} from "../app.component";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {email: '', password: ''};
  error =false;
  constructor(private app:AppComponent,private http: HttpClient, private router: Router) {
  }

  login() {
    if(!this.credentials.email || this.credentials.email.trim() == '' || !this.credentials.password || this.credentials.password.trim() == ''){
      this.error = true;
      return;
    }
    this.http.get(this.app.path+"login/"+this.credentials.email+"/"+btoa(this.credentials.password)).
    subscribe(value => {
      if(value){
        this.http.get(this.app.path+"persons/"+value).
        subscribe(v=>{
          if(v){
            localStorage.setItem('user', JSON.stringify(v));
            this.router.navigate(['/home']).then(r => console.log(r));
          }
          else this.error = true;
        });
      }
      else this.error = true;
    }, error => { console.error(error) ; });
  }

}
