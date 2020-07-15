import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient,public auth:AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getStudents(e){
    return this.http.get(e._links.self.href+"/students",this.info);
  }
  getBranches(){
    return this.http.get(this.path+"branches",this.info);
  }
  getTeaches(e){
    return this.http.get(e._links.self.href+"/teaches",this.info);
  }
  getProfessors(){
    return this.http.get(this.path+"professors",this.info);
  }
}
