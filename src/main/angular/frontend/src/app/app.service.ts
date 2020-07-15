import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }

  getObject(id) {
    return this.http.get(this.path+"obj/"+id,this.info);
  }
}
